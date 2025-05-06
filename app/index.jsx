import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import Logo from '../assets/img/image_1.avif'

// themed components
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Spacer height={20} />

      <ThemedText title={true} style={styles.title}>Hello, this is my first app</ThemedText>
      <Spacer height={10} />

      <ThemedText style={styles.subtitle}>Reading List App</ThemedText>
      <Spacer />

      <Link href="/login" style={styles.link}>
      <ThemedText>Login</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
      <ThemedText>Register</ThemedText>
      </Link>
      <Link href="/profile" style={styles.link}>
      <ThemedText>My Profile</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
  img: {
    width: 100, 
    height: 100,
  },
  link: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'pink',
    color: 'white',
    borderRadius: 5,
  },
})