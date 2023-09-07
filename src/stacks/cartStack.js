import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { CART, HOME, INFO_PAYMENT, PAYMENT_STATUS, PRODUCT_DEATAIL } from '../configs';
import Home from '../screens/home';
import DetailProduct from '../screens/detailProduct';
import Cart from '../screens/cart';
import PaymentStatus from '../screens/paymentStatus';
import InfoPayment from '../screens/infoPayment';
const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}} initialRouteName={CART}>
    <Stack.Screen name={CART} component={Cart} />
    <Stack.Screen name={PAYMENT_STATUS} component={PaymentStatus} />
    <Stack.Screen name={INFO_PAYMENT} component={InfoPayment} />
  </Stack.Navigator>
  )
}

export default CartStack