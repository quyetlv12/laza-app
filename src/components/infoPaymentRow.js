import { View, Text } from 'react-native'
import React from 'react'

const InfoPaymentRow = ({title , price}) => {
  return (
    <View className="flex flex-row justify-between mb-5">
      <Text className="text-[#8F959E] text-[15px]">{title}</Text>
      <Text className="text-[#1D1E20] text-[15px] font-bold">${price}</Text>
    </View>
  )
}

export default InfoPaymentRow