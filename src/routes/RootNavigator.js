import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationNativeContainer } from "@react-navigation/native";
import { ActiveList, ArchivedList, TodosList } from 'screens';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen name="ActiveList" component={ActiveList} />
        <Stack.Screen name="ArchivedList" component={ArchivedList} />
        <Stack.Screen name="TodosList" component={TodosList} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

export default RootNavigator
