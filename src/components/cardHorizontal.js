import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as IconsOutline from "react-native-heroicons/outline";

const CardHorizontal = () => {
    return (
        <View className="bg-[#FEFEFE] py-5 px-2 rounded-lg shadow-md mb-5">
            <View className='flex flex-row gap-4 items-center'>
                <Image source={require('../../assets/products/item1.png')} className="w-20 h-20 rounded-lg" />
                <View>
                    <Text className="font-bold mb-2">Men's Tie-Dye T-Shirt Nike Sportswear</Text>
                    <Text className="text-[11px] text-[#8F959E] mb-2">$45 (-$4.00 Tax)</Text>
                    <View className="flex flex-row justify-between">
                        <View className="flex flex-row items-center gap-5">
                            <TouchableOpacity>
                                <IconsOutline.ArrowUpCircleIcon size={25} color={'#8F959E'} />
                            </TouchableOpacity>
                            <Text>1</Text>
                            <TouchableOpacity>
                                <IconsOutline.ArrowDownCircleIcon size={25} color={'#8F959E'} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <IconsOutline.TrashIcon size={25} color={'#8F959E'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default CardHorizontal