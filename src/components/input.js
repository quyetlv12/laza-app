import React from 'react'
import { Keyboard, Text, TextInput, View } from 'react-native'

const Input = ({placeholder = '' , title = '' , onChangeText = () =>{} , className , type = 'default' , secureTextEntry= false}) => {
  return (
    <View className="mb-5">
        <Text className="text-[#1D1E20] text-[17px] font-bold mb-2">{title}</Text>
        <TextInput placeholder={placeholder} className={`rounded-lg h-[50px] bg-[#F5F6FA] px-5 text-[#8F959E] border-[1px] border-indigo-500`} keyboardType={type} onChangeText={onChangeText} returnKeyType='done' onSubmitEditing={Keyboard.dismiss} secureTextEntry={secureTextEntry}/>

    </View>
  )
}

export default Input