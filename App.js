import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Login,Start} from './Src/screens/index'
import { NavigationContainer} from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options = {{headerShown: false}} name="Start" component={Start} />
      <Stack.Screen options = {{headerShown: false}} name="Login" component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
    // <Start/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App