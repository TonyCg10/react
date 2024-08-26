import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from './src/Welcome'
import Subscribe from './src/Subscribe'
import { StyleSheet } from 'react-native'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerShadowVisible: true,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Subscribe" component={Subscribe} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  image: {
    width: '80%',
    height: '40%',
  },
  press: {
    backgroundColor: '#cab',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    padding: '2%',
    textAlign: 'center',
  },
})
