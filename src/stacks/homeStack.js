import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { CART, CATEGORY_ITEMS, HOME, PRODUCT_DEATAIL } from '../configs';
import Home from '../screens/home';
import DetailProduct from '../screens/detailProduct';
import CategoryItems from '../screens/categoryItems';
import Cart from '../screens/cart';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
    <Stack.Screen name={HOME} component={Home} />
    <Stack.Screen name={PRODUCT_DEATAIL} component={DetailProduct} />
    <Stack.Screen name={CATEGORY_ITEMS} component={CategoryItems} />
    <Stack.Screen name={CART} component={Cart} />
  </Stack.Navigator>
  )
}

export default HomeStack