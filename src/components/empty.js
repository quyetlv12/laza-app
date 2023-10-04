import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'

const Empty = () => {
  return (
    <SafeAreaView className="bg-white h-screen">
    <View className="flex flex-1 justify-center items-center px-5">
      <Image
        source={require("../../assets/cart/empty-box.png")}
        className="mb-2 h-60 w-60"
      />
      <Text className="text-[28px] font-bold mb-2">Empty cart !</Text>
      <Text className="text-[15px] font-thin text-center px-[5%]">Your order has been confirmed, we will send you confirmation email shortly.</Text>
      <TouchableOpacity activeOpacity={.7} className="mt-[20%] bg-[#F5F5F5] w-full py-5 rounded-lg shadow-sm" >
          <Text className="text-center text-[#8F959E]">Go to buy</Text>
      </TouchableOpacity>
    </View>
   
  </SafeAreaView>
  )
}

export default Empty