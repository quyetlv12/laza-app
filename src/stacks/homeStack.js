import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { CART, CATEGORY_ITEMS, HOME, PRODUCT_DEATAIL, PROFILE, USER_STACK } from '../configs';
import Home from '../screens/home';
import DetailProduct from '../screens/detailProduct';
import CategoryItems from '../screens/categoryItems';
import Cart from '../screens/cart';
import Profile from '../screens/profile';
import UserStack from './userStack';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
    <Stack.Screen name={HOME} component={Home} />
    <Stack.Screen name={PRODUCT_DEATAIL} component={DetailProduct} />
    <Stack.Screen name={CATEGORY_ITEMS} component={CategoryItems} />
    <Stack.Screen name={CART} component={Cart} />
    <Stack.Screen name={USER_STACK} component={UserStack} />
  </Stack.Navigator>
  )
}

export default HomeStack