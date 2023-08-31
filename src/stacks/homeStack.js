import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HOME, PRODUCT_DEATAIL } from '../configs';
import Home from '../screens/home';
import DetailProduct from '../screens/detailProduct';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
    <Stack.Screen name={HOME} component={Home} />
    <Stack.Screen name={PRODUCT_DEATAIL} component={DetailProduct} />
  </Stack.Navigator>
  )
}

export default HomeStack