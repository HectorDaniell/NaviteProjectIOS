import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import { PokemonStackNavigator } from '../../navigation/pokemonStackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                title: 'Inicio',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="home" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen
            name="Pokemones"
            component={PokemonStackNavigator}
            options={{
                title: 'Pokemones',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="list" color={color} size={size} />
                ),
            }}
        />
    </Tab.Navigator>
);