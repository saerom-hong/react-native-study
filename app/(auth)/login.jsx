import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'

//theme components
import ThemedView from '../../components/ThemedView' 
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'

const Login = () => {

  const handleLogin = () => {
    console.log('Login')
  }

  return (
    <ThemedView style={styles.container}>

      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to Your Account
      </ThemedText>

      <ThemedButton onPress={handleLogin}>
        <Text style={{ color: '#f2f2f2'}}>Login</Text>
      </ThemedButton>

      <Spacer height={100}/>
      <Link href="/register">
        <ThemedText style={{textAlign: 'center'}}>
          Register instead
        </ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Login

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
})