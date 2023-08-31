import React from "react";
import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as IconsOutline from "react-native-heroicons/outline";
import Card from "../components/card";
import TextStyle from "../components/text";

const Home = () => {
  const data = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1608444265903-d7883082872b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1372&q=80',
      name: 'Nike Sportswear Club Fleece',
      price : '99',
      size : ['S' , 'M', 'L' , 'XL' , '2XL']
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1590330297626-d7aff25a0431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      name: 'Trail Running Jacket Nike Windrunner',
      price : '99',
      size : ['S' , 'M', 'L' , 'XL' , '2XL']
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      name: 'Training Top Nike Sport Clash',
      price : '99',
      size : ['S' , 'M', 'L' , 'XL' , '2XL']
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1584486483122-af7d49cf2992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      name: 'Trail Running Jacket Nike Windrunner',
      price : '99',
      size : ['S' , 'M', 'L' , 'XL' , '2XL']
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      name: 'Training Top Nike Sport Clash',
      price : '99',
      size : ['S' , 'M', 'L' , 'XL' , '2XL']
    },
    {
      id: 6,
      img: 'https://images.unsplash.com/photo-1584486483122-af7d49cf2992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      name: 'Trail Running Jacket Nike Windrunner',
      price : '99',
      size : ['S' , 'M', 'L' , 'XL' , '2XL']
    },
    {
      id: 7,
      img: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      name: 'Training Top Nike Sport Clash',
      price : '99',
      size : ['S' , 'M', 'L' , 'XL' , '2XL']
    },
    {
      id: 8,
      img: 'https://images.unsplash.com/photo-1584486483122-af7d49cf2992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      name: 'Trail Running Jacket Nike Windrunner',
      price : '99',
      size : ['S' , 'M', 'L' , 'XL' , '2XL']
    },
  ]
  return (
    <View className="px-5 bg-white">
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <StatusBar barStyle="dark-content" />
          </View>
          <View className="flex flex-row justify-between h-12 items-center mb-5 mt-5">
            <TouchableOpacity className="bg-[#F5F6FA] p-4 rounded-full">
              <IconsOutline.UserIcon color={"#000"} />
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#F5F6FA] p-4 rounded-full">
              <IconsOutline.ShoppingBagIcon color={"#000"} />
            </TouchableOpacity>
          </View>

          <View className="mb-5">
          <TextStyle content={'Hello'} type="bold" />
          <TextStyle content={'Welcome to Laza.'} type="subTitle" />
          </View>
          {/* SEARCH BOX */}
          <View className="flex flex-row h-14 gap-2 mb-5">
            <View className="w-[75%]">
              <TextInput placeholder="Search..." className="h-full bg-[#F5F6FA] rounded-lg px-5" />
            </View>
            <TouchableOpacity className="bg-[#9775FA] rounded-lg w-[20%]">
              <Text className="text-center leading-[40px]"> <IconsOutline.MicrophoneIcon color={'#fff'} /></Text>
            </TouchableOpacity>
          </View>

          <View className="mb-5">
            <View className="flex flex-row items-center justify-between">
              <TextStyle content={'Choose Brand'} type="title" />
              <TouchableOpacity>
              <TextStyle content={'View all'} type="thin" />
              </TouchableOpacity>
            </View>
            <View className="mt-5">
              <ScrollView horizontal={true} className="gap-2" showsHorizontalScrollIndicator={false}>
                <View className="flex flex-row items-center bg-[#F5F6FA] w-36 rounded-2xl  py-3 px-2">
                  <View className="mr-2 bg-white p-3 rounded-2xl">
                    <Image
                      source={require('../../assets/brands/Adidas.png')}
                    // className="h-10 w-10"
                    />
                  </View>
                  <TextStyle content={'Adidas'} type="brand" />
                </View>
                <View className="flex flex-row items-center bg-[#F5F6FA] w-36 rounded-2xl  py-3 px-2">
                  <View className="mr-2 bg-white p-3 rounded-2xl">
                    <Image
                      source={require('../../assets/brands/Nike.png')}
                    // className="h-10 w-10"
                    />
                  </View>
                  <TextStyle content={'Nike'} type="brand" />
                </View>
                <View className="flex flex-row items-center bg-[#F5F6FA] w-36 rounded-2xl  py-3 px-2">
                  <View className="mr-2 bg-white p-3 rounded-2xl">
                    <Image
                      source={require('../../assets/brands/fila.png')}
                    // className="h-10 w-10"
                    />
                  </View>
                  <TextStyle content={'Fila'} type="brand" />
                </View>
                <View className="flex flex-row items-center bg-[#F5F6FA] w-36 rounded-2xl  py-3 px-2">
                  <View className="mr-2 bg-white p-3 rounded-2xl">
                    <Image
                      source={require('../../assets/brands/fila.png')}
                    // className="h-10 w-10"
                    />
                  </View>
                  <TextStyle content={'Nike'} type="brand" />
                </View>
              </ScrollView>
            </View>
          </View>
          {/* //============================== */}
          <View>
            <View className="flex flex-row items-center justify-between mb-5">
              <TextStyle content='New Arraival' type='title' />
              <TouchableOpacity>
                <TextStyle content={'View all'} type="thin" />
              </TouchableOpacity>
            </View>
            <View className="flex flex-row flex-wrap">
              {
                data.map((item , index) => (
                  <Card key={item.id} item={item} />
                ))
              }
            </View>
          </View>
        </ScrollView>

      </SafeAreaView>
    </View>
  );
};

export default Home;
