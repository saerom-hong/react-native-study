import { StyleSheet, FlatList, Pressable } from 'react-native' 
import { useBooks } from '../../hooks/useBooks'
import { Colors } from '../../constants/Colors'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import ThemedCard from '../../components/ThemedCard'  
import ThemedButton from '../../components/ThemedButton'

const Books = () => {
  const { books, deleteBook } = useBooks()

  return (
    <ThemedView safe={true} style={styles.container}>

      <Spacer />
      <ThemedText title={true} style={styles.heading}>
        Your Reading List: {books.length}
      </ThemedText>
      
      <Spacer />

      <FlatList
        data={books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/books/${item.$id}`)}>
            <ThemedCard style={styles.card} key={item.$id}>
              <ThemedText style={styles.title}>Title: {item.title}</ThemedText>
              <ThemedText>Written by {item.author}</ThemedText>
              <ThemedText>Description: {item.description}</ThemedText>
            </ThemedCard>
            <ThemedButton onPress={() => deleteBook(item.$id)}>
              <ThemedText>Delete</ThemedText>
            </ThemedButton>
          </Pressable>
        )}
      />

    </ThemedView>
  )
}

export default Books

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