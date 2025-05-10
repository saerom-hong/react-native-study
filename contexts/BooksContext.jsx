import { createContext, useState, useEffect } from 'react'
import { databases } from '../lib/appwrite'
import { ID, Permission, Role, Query } from 'appwrite'
import { useUser } from '../hooks/useUser'

const DATABASE_ID = '681eb764001974e1d6da'
const COLLECTION_ID = '681eb77a0023cde1af34'

export const BooksContext = createContext()

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([])
  const { user } = useUser()

  async function fetchBooks() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [
          Query.equal('userId', user.$id),
        ]
      )

      setBooks(response.documents)
      console.log(response.documents)
    } catch (error) {
      console.error(error.message)
    }
  }

  async function fetchBookById(id) {
    try {
      
    } catch (error) {
      console.error(error.message)
    }
  }

  async function createBook(data) {
    try {
      const newBook = await databases.createDocument(
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
      setBooks([...books, newBook])
    } catch (error) {
      console.error(error.message)
    }
  }

  async function deleteBook(id) {
    try {
      await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    if(user) {
      fetchBooks()
    } else {
      setBooks([])
    }
  }, [user])

  return(
    <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}> 
      {children}
    </BooksContext.Provider>
  )
}