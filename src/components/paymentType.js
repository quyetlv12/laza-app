import { View, Text, Image } from 'react-native'
import React from 'react'
import * as IconsOutline from "react-native-heroicons/solid";

const PaymentType = ({ title, subTitle , icon }) => {
    return (
        <View className="flex flex-row justify-between items-center mb-5">
            <View className="flex flex-row items-center gap-2">
                <Image source={icon} className="w-14 h-14" />
                <View>
                    <Text className="mb-2">{title}</Text>
                    <Text className="font-thin">{subTitle}</Text>
                </View>
            </View>
            <IconsOutline.CheckCircleIcon color="#4AC76D"/>
        </View>
    )
}

export default PaymentType