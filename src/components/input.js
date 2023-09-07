import React from 'react'
import { Keyboard, Text, TextInput, View } from 'react-native'

const Input = ({placeholder = '' , title = '' , onChangeText = () =>{}}) => {
  return (
    <View className="mb-5">
        <Text className="text-[#1D1E20] text-[17px] font-bold mb-2">{title}</Text>
        <TextInput placeholder={placeholder} className='h-[50px] bg-[#F5F6FA] px-5 text-[#8F959E]' onChangeText={onChangeText} returnKeyType='done' onSubmitEditing={Keyboard.dismiss}/>

    </View>
  )
}

export default Input