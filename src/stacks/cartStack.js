import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  CART,
  HOME,
  INFO_PAYMENT,
  LOGIN,
  PAYMENT_STATUS,
  PRODUCT_DEATAIL,
  SIGNUP,
} from "../configs";
import Home from "../screens/home";
import DetailProduct from "../screens/detailProduct";
import Cart from "../screens/cart";
import PaymentStatus from "../screens/paymentStatus";
import InfoPayment from "../screens/infoPayment";
import Login from "../screens/login";
import Signup from "../screens/signup";
import { useLogged } from "../hooks";
const Stack = createStackNavigator();

const CartStack = () => {
  const { status } = useLogged();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={CART}
    >
      {status ? (
        <>
          <Stack.Screen name={CART} component={Cart} />
        </>
      ) : (
        <>
          <Stack.Screen name={LOGIN} component={Login} />
          <Stack.Screen name={SIGNUP} component={Signup} />
        </>
      )}

      <Stack.Screen name={PAYMENT_STATUS} component={PaymentStatus} />
      <Stack.Screen name={INFO_PAYMENT} component={InfoPayment} />
    </Stack.Navigator>
  );
};

export default CartStack;
