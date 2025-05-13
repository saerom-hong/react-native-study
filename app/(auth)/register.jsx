import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'

//theme components
import ThemedView from '../../components/ThemedView' 
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { user, register } = useUser()

  const handleRegister = async () => {
    setError(null)
    try { 
      await register(email, password)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>

        <Spacer />
        <ThemedText title={true} style={styles.title}>
          Register for an Account
        </ThemedText>

        <ThemedTextInput
          style={{ width: '80%', marginBottom: 20 }}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <ThemedTextInput
          style={{ width: '80%', marginBottom: 20 }}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}  
          secureTextEntry={true} // hiding the password on the screen
        />

        {error && <Text style={styles.error}>{error}</Text>}  

        <ThemedButton onPress={handleRegister}>
          <Text style={{ color: '#f2f2f2'}}>Register</Text>
        </ThemedButton>

        <Spacer height={100}/>
        <Link href="/login">
          <ThemedText style={{textAlign: 'center'}}>
            Login instead
          </ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>  
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
  },
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: '#f5c1c8',
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 20,
    marginHorizontal: 20,
  },
})