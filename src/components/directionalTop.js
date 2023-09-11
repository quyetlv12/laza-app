import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import * as IconsOutline from "react-native-heroicons/outline";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CART, FAVOURITE, HOME, LOGIN } from "../configs";

const DirectionalTop = ({ title = "" }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const shouldShowRightIconName = route.name === CART || route.name === LOGIN;
  const showShowRightButton = route.name === LOGIN;
  return (
    <View className="bg-white">
      {showShowRightButton ? (
        <View className="flex flex-row justify-between h-10 items-start mb-5 mt-5 w-full z-50 px-3">
          <TouchableOpacity
            className="bg-[#F5F6FA] p-4 rounded-full"
            onPress={() => navigation.goBack()}
          >
            <IconsOutline.ArrowLeftIcon color={"#000"} />
          </TouchableOpacity>
        </View>
      ) : (
      0000
      )}
    </View>
  );
};

export default DirectionalTop;
