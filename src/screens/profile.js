import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as IconsOutline from "react-native-heroicons/outline";
import TextStyle from "../components/text";
import { LOGIN, Setting } from "../configs";
import { Alert } from "react-native";
import { useLogged } from "../hooks";

const Profile = ({ navigation, route }) => {
  const handleLogout = () => {
    Alert.alert("Thông báo", "Đăng xuất thành công !");
  };    
  return (
    <View className="bg-white h-screen px-5">
      <SafeAreaView>
        {/* AVATAR  */}
        <View className={`pb-2`}>
          <View className="mb-3">
            <Text className="font-bold text-[45px]">Profile</Text>
          </View>
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-x-4">
              <Image
                source={require("../../assets/products/item1.png")}
                className={"w-14 h-14 rounded-full"}
              />
              <View>
                <TextStyle content={"USER 1"} type="title" />
                <View className="flex flex-row items-center">
                  <TextStyle content={"Verified Profile"} type="thin" />
                  <IconsOutline.CheckCircleIcon
                    size={20}
                    color={"#4AC76D"}
                    className="ml-1"
                  />
                </View>
              </View>
            </View>
            <View>
              <View className="bg-[#F5F5F5] p-3 rounded-lg">
                <TextStyle content={"3 order"} type="thin" />
              </View>
            </View>
          </View>
        </View>
        {/* LIST */}
        <View className="mt-5">
          <ScrollView className="h-screen">
            {Setting.map(({ name, icon, rightButton, className }, index) => (
              <TouchableOpacity
                className={`flex flex-row items-center justify-between ${className}`}
                key={name}
              >
                <View className="flex flex-row items-center gap-2" key={name}>
                  {icon && icon}
                  <Text className="text-[15px] text-[#1D1E20] font-bold">
                    {name}
                  </Text>
                </View>
                {rightButton && rightButton}
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              className={`flex flex-row items-center justify-between`}
              onPress={handleLogout}
            >
              <View className="flex flex-row items-center gap-2">
                <IconsOutline.ArrowLeftOnRectangleIcon
                  color={"#FF5757"}
                  size={30}
                />
                <Text className="text-[15px] text-[#FF5757] font-bold">
                  Logout
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Profile;
