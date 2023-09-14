import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = ({content , onPress , mt , mb , ml , mr}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={.9} className={`w-full bg-indigo-500 mt-${mt} mb-${mb} ml-${ml} mr-${mr} py-3 rounded-lg shadow-md`}>
      <Text className='text-center text-white font-bold text-lg'>{content}</Text>
    </TouchableOpacity>
  )
}

export default Button