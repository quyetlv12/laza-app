import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as IconsOutline from "react-native-heroicons/outline";
import * as IconsSolid from "react-native-heroicons/solid";
import { CART, FAVOURITE, HOME, HOME_STACK, PROFILE } from "./src/configs";
import Cart from "./src/screens/cart";
import Favourite from "./src/screens/favourite";
import Profile from "./src/screens/profile";
import HomeStack from "./src/stacks/homeStack";
import 'react-native-gesture-handler';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        headerMode="screen"
        initialRouteName={"home"}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === HOME_STACK) {
              return !focused ? (
                <IconsOutline.HomeIcon color={"#9775FA"} />
              ) : (
                <IconsSolid.HomeIcon color={"#9775FA"} />
              );
            } else if (route.name === FAVOURITE) {
              return !focused ? (
                <IconsOutline.HeartIcon color={"#9775FA"} />
              ) : (
                <IconsSolid.HeartIcon color={"#9775FA"} />
              );
            } else if (route.name === CART) {
              return !focused ? (
                <IconsOutline.ShoppingBagIcon color={"#9775FA"} />
              ) : (
                <IconsSolid.ShoppingBagIcon color={"#9775FA"} />
              );
            } else if (route.name === PROFILE) {
              return !focused ? (
                <IconsOutline.UserIcon color={"#9775FA"} />
              ) : (
                <IconsSolid.UserIcon color={"#9775FA"} />
              );
            }
          },
          tabBarActiveTintColor: "#9775FA",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name={HOME_STACK} component={HomeStack} options={{title : "Home"}} />
        <Tab.Screen name={FAVOURITE} component={Favourite} />
        <Tab.Screen name={CART} component={Cart} />
        <Tab.Screen name={PROFILE} component={Profile} />
        {/* <Tab.Screen  /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
