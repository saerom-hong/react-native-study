import { StyleSheet, Text } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { useTodos } from '../../../hooks/useTodos'
import { Colors } from '../../../constants/Colors'

import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import ThemedButton from '../../../components/ThemedButton'
import Spacer from '../../../components/Spacer'
import ThemedCard from '../../../components/ThemedCard'
import ThemedLoader from '../../../components/ThemedLoader'


const TodoDetails = () => {
  const [todo, setTodo] = useState(null)

  const { id } = useLocalSearchParams()
  const { fetchTodoById, deleteTodos } = useTodos()
  const router = useRouter()  

  const handleDelete = async () => {
    await deleteTodos(id)
    setTodo(null)
    router.push('/todos')
  }

  useEffect(() => {
    async function loadTodo() {
      const todoData = await fetchTodoById(id)
      setTodo(todoData)
    }
    loadTodo()
  }, [id])

  if(!todo) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView> 
    )
  }
  
  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{todo.title}</ThemedText>
        <ThemedText>Finish by: {todo.deadline}</ThemedText>
        <Spacer />

        <ThemedText title={true}>Extra notes:</ThemedText>
        <Spacer height={10} />

        <ThemedText>{todo.description}</ThemedText>
      </ThemedCard>

      <ThemedButton 
        style={styles.delete}
        onPress={handleDelete} 
      >
        <Text style={{ color: '#fff', textAlign: 'center'}}>I've finished this task</Text>
      </ThemedButton>
    </ThemedView>
  )
}

export default TodoDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20
  },
  delete: {
    marginTop: 20,
    backgroundColor: Colors.warning,
    width: 200,
    alignSelf: 'center'
  }
})