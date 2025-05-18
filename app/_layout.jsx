import { StyleSheet, useColorScheme } from 'react-native'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'
import { UserProvider } from '../contexts/UserContext'
import { TodosProvider } from '../contexts/TodosContext'

const RootLayout = () => {
  const colorScheme = useColorScheme()  
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <UserProvider>
      <TodosProvider>
        <StatusBar value="auto" />
        <Stack screenOptions={{ 
          headerStyle: { backgroundColor: theme.navBackground }, 
          headerTintColor: theme.text,
          }}>  
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ title: 'Home' }} />  
        </Stack>
       </TodosProvider>
    </UserProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})