import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Animated } from "react-native";
import { Provider, useSelector } from "react-redux";
import { store } from "./src/redux/store";
import MainRouter from "./src/stacks/mainRouter";

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});


export default function App() {
  return (
    <Provider store={store}>
     <MainRouter />
    </Provider>
  );
}
