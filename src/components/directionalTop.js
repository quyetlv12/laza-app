import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import * as IconsOutline from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';
import { FAVOURITE } from '../configs';

const DirectionalTop = () => {
    const navigation = useNavigation();
    return (
        <View className="bg-white">
            <View className="flex flex-row justify-between h-10 items-center mb-5 mt-5 w-full z-50 px-3">
                <TouchableOpacity
                    className="bg-[#F5F6FA] p-4 rounded-full"
                    onPress={() => navigation.goBack()}
                >
                    <IconsOutline.ArrowLeftIcon color={"#000"} />
                </TouchableOpacity>
                <Text className="h-30 text-[17px] font-bold">Cart</Text>
                <TouchableOpacity
                    className="bg-[#F5F6FA] p-4 rounded-full"
                    onPress={() => navigation.navigate(FAVOURITE)}
                >
                    <IconsOutline.HeartIcon color={"#000"} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DirectionalTop