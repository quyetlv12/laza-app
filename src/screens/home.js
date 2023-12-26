import React from "react";
import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as IconsOutline from "react-native-heroicons/outline";
import Card from "../components/card";
import TextStyle from "../components/text";
import { CART, CATEGORY_ITEMS, PROFILE, data, fashionBrands } from "../configs";
import { Keyboard } from "react-native";
import DirectionalTop from "../components/directionalTop";
import { selectCount } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import HttpClient from "../auth/Client";
import { getAllProducts, products } from "../redux/slices/productSlice";
import { useIsFocused } from "@react-navigation/native";
import { getProductAsync } from "../redux/slices/cartSlice";

const Home = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch()
  const productsSlice = useSelector(products)
  useEffect(() => {
   const getProducts = async () =>{
    const res = await HttpClient.get('/products')
    if (res.status === 200) {
      dispatch(getAllProducts(res.data))
    }
   }
   
   if (isFocused) {
    getProducts()
    dispatch(getProductAsync());
   }
  }, [isFocused])
  
  return (
    <SafeAreaView className="bg-white">
      <View className="px-2">
      <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <StatusBar barStyle="dark-content" />
          </View>
          <DirectionalTop />

          <View className="mb-5">
          <TextStyle content={'Hello'} type={'bold'} />
          <TextStyle content={'Welcome to Laza.'} type="subTitle" />
          </View>
          {/* SEARCH BOX */}
          <View className="flex flex-row h-14 gap-2 mb-5">
            <View className="w-[80%] ">
              <TextInput placeholder="Search..." className="h-full bg-[#F5F6FA] px-5 rounded-lg" onSubmitEditing={Keyboard.dismiss} sub/>
            </View>
            <TouchableOpacity activeOpacity={.7} className="bg-[#9775FA] flex items-center justify-center px-3 rounded-lg">
              <Text className=""> <IconsOutline.MicrophoneIcon color={'#fff'} /></Text>
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
                {
                  fashionBrands.map((item , index) => (
                    <TouchableOpacity activeOpacity={.7}key={item.id} className="flex flex-row items-center rounded-2xl bg-[#F5F6FA] py-3 px-2" onPress={() => navigation.navigate(CATEGORY_ITEMS , {
                      cateName: item.name,
                  })}>
                  <View className="mr-2 bg-white p-3 rounded-2xl">
                    <Image
                      source={{uri : item.logo}}
                    style={{ width: 30, height: 30 }}
                    />
                  </View>
                  <TextStyle content={item.name} type="brand" />
                </TouchableOpacity>
                  ))
                }
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
                productsSlice.map((item , index) => (
                  <Card key={item.id} item={item} />
                ))
              }
            </View>
          </View>
        </ScrollView>
      </View>
      
      </SafeAreaView>
  );
};

export default Home;
