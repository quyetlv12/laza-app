import React from 'react';
import { Image, SafeAreaView, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import * as IconsOutline from "react-native-heroicons/outline";
import TextStyle from '../components/text';
import { Setting } from '../configs';

const Profile = () => {
  return (
    <View className="bg-white h-screen py-20 px-5">
      <SafeAreaView>
        {/* AVATAR  */}
        <View className={`pb-2`}>
          <View className="mb-3">
            <Text className='font-bold text-[45px]'>Profile</Text>
          </View>
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-x-4">
              <Image source={require('../../assets/products/item1.png')} className={'w-14 h-14 rounded-full'} />
              <View>
                <TextStyle content={'USER 1'} type='title' />
                <View className='flex flex-row items-center'>
                  <TextStyle content={'Verified Profile'} type='thin' />
                  <IconsOutline.CheckCircleIcon size={20} color={'#4AC76D'} className="ml-1" />
                </View>
              </View>
            </View>
            <View>
              <View className="bg-[#F5F5F5] p-3 rounded-lg">
                <TextStyle content={'3 order'} type='thin' />
              </View>
            </View>
          </View>
        </View>
        {/* LIST */}
        <View className='mt-5'>
          {
            Setting.map(({ name, icon, rightButton, className }, index) => (
              <TouchableOpacity className={`flex flex-row items-center justify-between ${className}`} key={name}>
                <View className='flex flex-row items-center gap-2' key={name}>
                  {
                    icon && icon
                  }
                  <Text className='text-[15px] text-[#1D1E20] font-bold'>{name}</Text>
                </View>
                {
                  rightButton && rightButton
                }
              </TouchableOpacity>
            ))
          }
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Profile