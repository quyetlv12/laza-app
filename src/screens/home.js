import React from "react";
import { Button, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
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

        <View className="mb-5">
          <Text className="text-[#1D1E20] text-[28px] font-bold mb-1">
            Hello
          </Text>
          <Text className="text-[#8F959E] text-[15px]">Welcome to Laza.</Text>
        </View>
        {/* SEARCH BOX */}
        <View className="flex flex-row h-14 gap-2 mb-5">
            <View className="w-[75%]">
                <TextInput  placeholder="Search..." className="h-full bg-[#F5F6FA] rounded-lg px-5" />
            </View>
            <TouchableOpacity className="bg-[#9775FA] rounded-lg p-4 w-[20%] ">
              <Text>  <IconsOutline.MicrophoneIcon color={'#fff'} /></Text>
            </TouchableOpacity>
        </View>

        <View>
            <View className="flex flex-row items-center justify-between">
            <Text className="text-[#1D1E20] font-bold text-[17px] ">
              Choose Brand
            </Text>
            <TouchableOpacity>
                <Text className="text-[#8F959E] text-[13px]">View all</Text>
            </TouchableOpacity>
            </View>
          
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
