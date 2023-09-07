import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import * as IconsOutline from "react-native-heroicons/outline";
import { useNavigation, useRoute } from '@react-navigation/native';
import { CART, FAVOURITE, HOME } from '../configs';

const DirectionalTop = ({title = ""}) => {
    const navigation = useNavigation();
    const route = useRoute()
    return (
        <View className="bg-white">
            <View className="flex flex-row justify-between h-10 items-center mb-5 mt-5 w-full z-50 px-3">
                <TouchableOpacity
                    className="bg-[#F5F6FA] p-4 rounded-full"
                    onPress={() => navigation.goBack()}
                >
                    <IconsOutline.ArrowLeftIcon color={"#000"} />
                </TouchableOpacity>
                <Text className="h-30 text-[17px] font-bold text-left">{title}</Text>
                <TouchableOpacity
                    className="bg-[#F5F6FA] p-4 rounded-full"
                    onPress={() => navigation.navigate(route.name === CART ? HOME : CART)}
                >
                    {
                        route.name === CART ? <IconsOutline.HomeIcon color={"#000"} /> : <IconsOutline.ShoppingBagIcon color={"#000"} />
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DirectionalTop
