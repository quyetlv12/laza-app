import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = ({content , onPress , mt , mb , ml , mr , size = '' , icon , bg = 'bg-indigo-500' , w ='w-full' , py = 'py-3' , px , imageLink }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={.9} className={`${w} ${bg} mt-${mt} mb-${mb} ml-${ml} mr-${mr} ${py} ${px} rounded-lg shadow-md`}>
     {
      imageLink && <View  className="flex items-center">
         <Image source={{ uri: imageLink }}  style={{ width: 30, height: 30 }} className="bg-white p-3 mb-1 rounded-full" />
      </View>
     }
      <Text className={`text-center text-white font-bold text-lg ${size}`}>{icon} {content}</Text>
    </TouchableOpacity>
  )
}

export default Button