import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as IconsOutline from "react-native-heroicons/outline";
const CardHorizontal = ({item , deleteItem , plusQuantity , minusQuantity}) => {
    return (
        <View className="bg-[#FEFEFE] py-5 px-2 rounded-lg shadow-sm mb-5 mt-2">
            <View className='flex flex-row gap-4 items-center'>
                <Image source={{uri : item?.img}} className="w-20 h-20 rounded-lg" />
                <View style={{flexGrow:1,width:0,flexDirection:"column",justifyContent:"center"}}>
                    <View>
                        <Text className="font-bold mb-2">{item?.name} - {item.sizeSelect}</Text>
                    </View>
                    <Text className="text-[11px] text-[#8F959E] mb-2">${item?.price}</Text>
                    <View className="flex flex-row justify-between">
                        <View className="flex flex-row items-center gap-5">
                            <TouchableOpacity onPress={() => plusQuantity(item)}>
                                <IconsOutline.ArrowUpCircleIcon size={25} color={'#8F959E'} />
                            </TouchableOpacity>
                            <Text>{item?.quantity}</Text>
                            {
                                item.quantity > 1 && <TouchableOpacity onPress={() => minusQuantity(item)}>
                                <IconsOutline.ArrowDownCircleIcon size={25} color={'#8F959E'} />
                            </TouchableOpacity>
                            }
                        
                        </View>
                        <View className="flex justify-end">
                            <TouchableOpacity onPress={() => deleteItem(item)}>
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