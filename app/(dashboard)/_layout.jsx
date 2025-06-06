import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";  
import { Ionicons } from "@expo/vector-icons";
import UserOnly from "../../components/auth/UserOnly";

export default function DashboardLayout() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <UserOnly>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.navBackground,
            paddingTop: 10,
            height: 90
          },
          tabBarActiveTintColor: theme.iconColorFocused,
          tabBarInactiveTintColor: theme.iconColor,
        }}  
      >
        <Tabs.Screen 
          name="profile" 
          options={{ 
            title: "Profile", 
            tabBarIcon: ({ focused }) => (
              <Ionicons 
                name={focused ? "person" : "person-outline"} 
                size={24} 
                color={focused ? theme.iconColorFocused : theme.iconColor}  
              />
            ),
          }} 
          />
        <Tabs.Screen 
          name="todos" 
          options={{ 
            title: "Todos", 
            tabBarIcon: ({ focused }) => (
              <Ionicons 
                name={focused ? "book" : "book-outline"} 
                size={24} 
                color={focused ? theme.iconColorFocused : theme.iconColor}  
              />
            ),
          }} 
          />
        <Tabs.Screen 
          name="create" 
          options={{ 
            title: "Create", 
            tabBarIcon: ({ focused }) => (
              <Ionicons 
                name={focused ? "create" : "create-outline"} 
                size={24} 
                color={focused ? theme.iconColorFocused : theme.iconColor}  
              />
            ),
          }} 
          />
          <Tabs.Screen 
            name="todos/[id]"
            options={{
              href: null,
            }}
          />
      </Tabs>
    </UserOnly>  
  )
} 