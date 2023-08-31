import { View, Text, Image } from 'react-native'
import React from 'react'

const Card = ({item}) => {
  return (
    <View  className={`flex flex-1 text-center h-14 basis-[32] justify-center items-center text-white bg-fuchsia-500 rounded `}>
      <Image  source={{uri: item.img}}
       style={{width: '100%', height: 300}} className="rounded-2xl mb-2" />
      <Text className="max-w-[150px] mb-2">{item.name}</Text>
      <Text className="font-bold text-[#1D1E20]">$99</Text>
    </View>
  )
}

export default Card