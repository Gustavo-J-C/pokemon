import React from 'react';
import { StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Api} from './src/context/Api';
import Main from './src/screens/Main';
import Infos from './src/screens/Infos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Api>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Home" component={Main} />
          <Stack.Screen name="Infos" component={Infos} />
        </Stack.Navigator>
      </NavigationContainer>
    // </Api>
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
