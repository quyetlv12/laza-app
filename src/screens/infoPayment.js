import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import DirectionalTop from "../components/directionalTop";
import Input from "../components/input";
import { Switch } from "react-native";
import { TouchableOpacity } from "react-native";
import { CART, PAYMENT_STATUS } from "../configs";

const InfoPayment = ({ navigation, route }) => {
  return (
    <SafeAreaView className="bg-white h-screen">
      <DirectionalTop title="Billing Information" />
      <ScrollView className="px-5">
        {/* NAME */}
        <View>
          <Input title="Name" />
          <View className="flex flex-row">
            <View className="w-1/2 pr-2">
              <Input title="Country" />
            </View>
            <View className="w-1/2 pl-2">
              <Input title="City" />
            </View>
          </View>
          <Input title="Phone Number" />
          <Input title="Address" />
        </View>
        <View className="flex flex-row justify-between items-center mb-5 mt-[5%]">
            <Text className="text-[#1D1E20] font-bold text-[15px]">Save as primary address</Text>
            <Switch />
        </View>
        <TouchableOpacity activeOpacity={.7}onPress={() =>navigation.navigate(PAYMENT_STATUS)} className="mt-5 bg-indigo-500 w-full py-5 rounded-lg shadow-sm" >
            <Text className="text-center text-white">Orders</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoPayment;
