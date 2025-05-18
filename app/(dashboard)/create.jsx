import { StyleSheet, TouchableWithoutFeedback, Keyboard, Text } from 'react-native'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { useTodos } from '../../hooks/useTodos'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'

const Create = () => {
  const [title, setTitle] = useState('')
  const [deadline, setDeadline] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  
  const { createTodo } = useTodos()
  const router = useRouter()

  const handleSubmit = async () => {
    if(!title.trim() || !deadline.trim() || !description.trim()) return
    
    setLoading(true)

    await createTodo({
      title,
      deadline,
      description,
    })

    //reset fields
    setTitle('')
    setDeadline('')
    setDescription('')

    //redirect 
    router.replace('/todos')

    //reset loading state
    setLoading(false)
  } 

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <ThemedView style={styles.container}>

        <ThemedText title={true} style={styles.heading}>
          Add a New Todo
        </ThemedText>
        <Spacer />

        <ThemedTextInput
          style={styles.input}
          placeholder="What do you need to do?"
          value={title}
          onChangeText={setTitle}
          autoCapitalize="words"
        />
        <Spacer height={20}/>

        <ThemedTextInput
          style={styles.input}
          placeholder="Deadline"
          value={deadline}
          onChangeText={setDeadline}
        />
        <Spacer height={20}/>

        <ThemedTextInput
          style={styles.multiline}
          placeholder="Extra notes"
          value={description}
          onChangeText={setDescription}
          multiline={true}
        />
        <Spacer />

        <ThemedButton onPress={handleSubmit} disabled={loading}>
          <Text style={{ color: '#fff'}}>
            {loading ? 'Saving...' : 'Create Todo'}
          </Text>
        </ThemedButton>

      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  input: {
    padding: 20,
    borderRadius: 6,
    alignSelf: "stretch",
    minHeight: 60,
    marginHorizontal: 40,
  },
  multiline: {
    padding: 20,
    borderRadius: 6,
    alignSelf: "stretch",
    marginHorizontal: 40,
    minHeight: 100,
  },
})