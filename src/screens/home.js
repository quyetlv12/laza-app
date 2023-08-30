import React from "react";
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import * as IconsOutline from "react-native-heroicons/outline";

const Home = () => {
  return (
    <View className="px-5 bg-white h-screen">
      <SafeAreaView>
        <View>
          <StatusBar barStyle="dark-content" />
        </View>

        <View className="flex flex-row justify-between h-12 items-center mb-5">
          <TouchableOpacity className="bg-[#F5F6FA] p-4 rounded-full">
            <IconsOutline.UserIcon color={"#000"} />
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#F5F6FA] p-4 rounded-full">
            <IconsOutline.ShoppingBagIcon color={"#000"} />
          </TouchableOpacity>
        </View>

        <View>
          <Text className="text-[#1D1E20] text-[28px] font-bold mb-1">
            Hello
          </Text>
          <Text className="text-[#8F959E] text-[15px]">Welcome to Laza.</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
