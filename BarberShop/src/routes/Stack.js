import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../pages/Home'
import HomeBarbearia from '../pages/HomeBarbearia'

const Stack = createStackNavigator()

export default () => {
  return(
  <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} /> 
      <Stack.Screen name="HomeBarbearia" component={HomeBarbearia} />
    </Stack.Navigator>
  )
}
