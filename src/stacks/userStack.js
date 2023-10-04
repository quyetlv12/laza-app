import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { LOGIN, PROFILE, SIGNUP } from "../configs";
import Profile from "../screens/profile";
import Login from "../screens/login";
import Signup from "../screens/signup";
import { useLogged } from "../hooks";
const Stack = createStackNavigator();
const UserStack = () => {
  const { status } = useLogged();
  console.log("status" , status);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {status ? (
        <>
          <Stack.Screen name={PROFILE} component={Profile} />
        </>
      ) : (
        <>
          <Stack.Screen name={LOGIN} component={Login} />
          <Stack.Screen name={SIGNUP} component={Signup} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default UserStack;
