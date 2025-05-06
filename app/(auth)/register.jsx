import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'

//theme components
import ThemedView from '../../components/ThemedView' 
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'

const Register = () => {

  const handleRegister = () => {
    console.log('Register')
  }

  return (
    <ThemedView style={styles.container}>

      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register for an Account
      </ThemedText>

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
  }
})