import { StyleSheet, Image } from 'react-native'
import { Link } from 'expo-router'
import Logo from '../assets/img/todo_logo.png'

// themed components
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Spacer height={20} />

      <ThemedText title={true} style={styles.title}>Simple ToDo List</ThemedText>
      <Spacer height={10} />

      <ThemedText style={styles.subtitle}>Record your daily tasks</ThemedText>
      <Spacer />

      <Link href="/login" style={styles.link}>
      <ThemedText style={styles.linkText}>Login</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
      <ThemedText style={styles.linkText}>Register</ThemedText>
      </Link>
      <Link href="/profile" style={styles.link}>
      <ThemedText style={styles.linkText}>My Profile</ThemedText>
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
    backgroundColor: 'purple',
    borderRadius: 5,
    fontWeight: 'bold',
    alignItems: 'center',
    width: 100,
  },
  linkText: {
    textAlign: 'center',
    color: '#f2f2f2',
  }
})