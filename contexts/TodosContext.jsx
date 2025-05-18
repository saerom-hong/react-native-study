import { createContext, useState, useEffect } from 'react'
import { databases, client } from '../lib/appwrite'
import { ID, Permission, Role, Query } from 'react-native-appwrite'
import { useUser } from '../hooks/useUser'

const DATABASE_ID = '681eb764001974e1d6da'
const COLLECTION_ID = '681eb77a0023cde1af34'

export const TodosContext = createContext()

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState([])
  const { user } = useUser()

  async function fetchTodos() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [
          Query.equal('userId', user.$id),
        ]
      )

      setTodos(response.documents)
    } catch (error) {
      console.error(error.message)
    }
  }

  async function fetchTodoById(id) {
    try {
      //get single Todos by id
      const response = await databases.getDocument(DATABASE_ID, COLLECTION_ID, id)
      return response
    } catch (error) {
      console.error(error.message)
      throw error
    }
  }

  async function createTodo(data) {
    try {
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {...data, userId: user.$id},
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      )
    } catch (error) {
      console.error(error.message)
    }
  }

  async function deleteTodos(id) {
    try {
      await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    let unsubscribe
    const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`

    if(user) {
      fetchTodos()

      unsubscribe = client.subscribe(channel, (response) => {
        const { payload, events } = response

        if(events[0].includes('create')) {
          setTodos((prevTodos) => [...prevTodos, payload])
        }

        if(events[0].includes('delete')) {
          setTodos((prevTodos) => prevTodos.filter((Todos) => Todos.$id !== payload.$id))
        }
      })
    } else {
      setTodos([])
    }
    
    return () => {
      //cleanup 
      if(unsubscribe) {
        unsubscribe()
      }
    }
    
  }, [user])

  return(
    <TodosContext.Provider value={{ todos, fetchTodos, fetchTodoById, createTodo, deleteTodos }}> 
      {children}
    </TodosContext.Provider>
  )
}