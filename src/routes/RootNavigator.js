import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationNativeContainer} from '@react-navigation/native';
import {ActiveList, ArchivedList, TodosList} from 'screens';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ActiveList"
          component={ActiveList}
          options={{title: 'Active'}}
        />
        <Stack.Screen
          name="ArchivedList"
          component={ArchivedList}
          options={{title: 'Archived'}}
        />
        <Stack.Screen
          name="TodosList"
          component={TodosList}
          options={({route}) => ({title: route.params.title})}
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

export default RootNavigator;
