import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import DirectionalTop from "../components/directionalTop";
import { Image } from "react-native";
import { CART } from "../configs";
import { TouchableOpacity } from "react-native";

const PaymentStatus = ({ navigation, route }) => {
  return (
    <SafeAreaView className="bg-white h-screen">
      <DirectionalTop />
      <View className="flex flex-1 justify-center items-center px-5">
        <Image
          source={require("../../assets/cart/payment-success.png")}
          className="mb-2"
        />
        <Text className="text-[28px] font-bold mb-2">Order Confirmed!</Text>
        <Text className="text-[15px] font-thin text-center px-[10%]">Your order has been confirmed, we will send you confirmation email shortly.</Text>
        <TouchableOpacity activeOpacity={.7}onPress={() =>navigation.navigate(CART)} className="mt-40 bg-[#F5F5F5] w-full py-5 rounded-lg shadow-sm" >
            <Text className="text-center text-[#8F959E]">Go to Orders</Text>
        </TouchableOpacity>
      </View>
     
    </SafeAreaView>
  );
};

export default PaymentStatus;
