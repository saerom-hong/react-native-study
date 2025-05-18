import { StyleSheet, FlatList, Pressable } from 'react-native' 
import { useTodos } from '../../hooks/useTodos'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import ThemedCard from '../../components/ThemedCard'  

const Todos = () => {
  const { todos } = useTodos()
  const router = useRouter()

  return (
    <ThemedView safe={true} style={styles.container}>

      <Spacer />
      <ThemedText title={true} style={styles.heading}>
        Your Todo List: {todos.length}
      </ThemedText>
      
      <Spacer />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/todos/${item.$id}`)}>
            <ThemedCard style={styles.card} key={item.$id}>
              <ThemedText style={styles.title}>TODO: {item.title}</ThemedText>
              <ThemedText>Finish by: {item.deadline}</ThemedText>
              <ThemedText>Extra notes: {item.description}</ThemedText>
            </ThemedCard>
          </Pressable>
        )}
      />

    </ThemedView>
  )
}

export default Todos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },  
  list: {
    marginTop: 40,
  },  
  card: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 10,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  }
})