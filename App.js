import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as IconsOutline from "react-native-heroicons/outline";
import * as IconsSolid from "react-native-heroicons/solid";
import { CART, CART_STACK, FAVOURITE, HOME, HOME_STACK, PROFILE, USER_STACK } from "./src/configs";
import Cart from "./src/screens/cart";
import Favourite from "./src/screens/favourite";
import Profile from "./src/screens/profile";
import HomeStack from "./src/stacks/homeStack";
import 'react-native-gesture-handler';
import CartStack from "./src/stacks/cartStack";
import UserStack from "./src/stacks/userStack";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={HOME}
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
            } else if (route.name === CART_STACK) {
              return !focused ? (
                <IconsOutline.ShoppingBagIcon color={"#9775FA"} />
              ) : (
                <IconsSolid.ShoppingBagIcon color={"#9775FA"} />
              );
            } else if (route.name === USER_STACK) {
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
          animationEnabled: true,
          lazy : true,
          tabBarShowLabel : true,
          tabBarLabelStyle : {
            fontWeight : 700,

          }
        })}
      >
        <Tab.Screen name={HOME_STACK} component={HomeStack} options={{title : "Home"}} />
        <Tab.Screen name={FAVOURITE} component={Favourite} />
        <Tab.Screen name={CART_STACK} component={CartStack} options={{title : "Cart"}}  />
        <Tab.Screen name={USER_STACK} component={UserStack}  options={{title : "Profile"}}/>
        {/* <Tab.Screen  /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
