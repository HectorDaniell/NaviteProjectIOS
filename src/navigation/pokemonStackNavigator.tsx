import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';

const Stack = createNativeStackNavigator();

export const PokemonStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SecondScreen" component={SecondScreen} />
    <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
  </Stack.Navigator>
);