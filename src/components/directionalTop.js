import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import * as IconsOutline from "react-native-heroicons/outline";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CART, FAVOURITE, HOME, LOGIN, PROFILE, USER_STACK } from "../configs";
import { productsInCart } from "../redux/slices/cartSlice";
import { useSelector } from "react-redux";

const DirectionalTop = ({ title, isShowRightButton = true}) => {
  const navigation = useNavigation();
  const route = useRoute()
  const shouldShowLeftIcon = route.name === HOME  
  const shouldShowRightIcon =   route.name === HOME
  const products = useSelector(productsInCart) 
  const handleLeftButton = () => {
    if (shouldShowLeftIcon) navigation.navigate(USER_STACK)
    else navigation.goBack()
  }
  return (
    <View className="bg-white px-2">
      <View className="flex h-10 items-center justify-center mb-5 mt-5 w-full z-50 px-3 relative">
        <TouchableOpacity
          className="bg-[#F5F6FA] p-4 rounded-full left-0 absolute"
          onPress={handleLeftButton}
        >
          {
            shouldShowLeftIcon ? <IconsOutline.UserIcon color={"#000"} /> :  <IconsOutline.ArrowLeftIcon color={"#000"} />
          }
        
        </TouchableOpacity>
        {title && <Text className="text-[20px] font-bold">{title}</Text>}
        {isShowRightButton && (
          <TouchableOpacity
            className="bg-[#F5F6FA] p-4 rounded-full right-0 absolute"
            onPress={() => navigation.navigate(CART)}
          >
            <IconsOutline.ShoppingBagIcon color={"#000"} />
            <View className="absolute top-0 right-0  bg-red-500 flex items-center justify-center rounded-full h-6 w-6">
            <Text className="text-white">{products.length}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default DirectionalTop;
