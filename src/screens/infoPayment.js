import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import DirectionalTop from '../components/directionalTop'
import Input from "../components/input";
import { Switch } from "react-native";
import { TouchableOpacity } from "react-native";
import { CART, PAYMENT_STATUS } from "../configs";
import { useForm } from "react-hook-form";

const InfoPayment = ({ navigation, route }) => {
  const {register , handleSubmit , setValue} = useForm()
  return (
    <SafeAreaView className="bg-white h-screen">
      <DirectionalTop title="Thông tin thanh toán" isShowRightButton={false}/>
      <ScrollView className="px-5">
        {/* NAME */}
        <View>
          <Input title="Họ và tên" name={"name"} />
          {/* <View className="flex flex-row">
            <View className="w-1/2 pr-2">
              <Input title="Thành phố" name="city" />
            </View>
            <View className="w-1/2 pl-2">
              <Input title="Xã/phường" />
            </View>
          </View> */}
          <Input title="Địa chỉ" name="address" />
          <Input title="Số điện thoại" name="phone" />
         
        </View>
        <View className="flex flex-row justify-between items-center mb-5 mt-[5%]">
            <Text className="text-[#1D1E20] font-bold text-[15px]" >Lưu địa chỉ</Text>
            <Switch />
        </View>
        <TouchableOpacity activeOpacity={.7}onPress={() =>navigation.navigate(PAYMENT_STATUS)} className="mt-5 bg-indigo-500 w-full py-4 rounded-lg shadow-sm" >
            <Text className="text-center text-white font-bold text-lg">Đặt hàng</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoPayment;
