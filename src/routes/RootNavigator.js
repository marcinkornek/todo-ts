import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationNativeContainer } from "@react-navigation/native";
import { Home, Profile } from '../screens';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

export default RootNavigator
