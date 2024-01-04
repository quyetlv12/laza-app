import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Animated } from "react-native";
import { Provider, useSelector } from "react-redux";
import { store } from "./src/redux/store";
import MainRouter from "./src/stacks/mainRouter";
import { ToastProvider } from "react-native-toast-notifications";
import { NativeBaseProvider } from "native-base";
const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <NativeBaseProvider>
          <ToastProvider
            placement="top"
            duration={3000}
            animationType="slide-in"
            animationDuration={250}
            successColor="green"
            dangerColor="red"
            warningColor="orange"
            normalColor="gray"
            textStyle={{ fontSize: 16 }}
            offset={50} // offset for both top and bottom toasts
            offsetTop={30}
            offsetBottom={40}
            swipeEnabled={true}
          >
            <MainRouter />
          </ToastProvider>
        </NativeBaseProvider>
      </Provider>
    </NativeBaseProvider>
  );
}
