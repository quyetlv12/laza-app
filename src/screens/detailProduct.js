import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import * as IconsOutline from "react-native-heroicons/outline";
import { ScrollView } from "react-native";
import TextStyle from "../components/text";

const DetailProduct = ({ navigation, route }) => {
  // {"id": 1, "img": "https://images.unsplash.com/photo-1608444265903-d7883082872b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1372&q=80", "name": "Nike Sportswear Club Fleece", "price": "99"}
  const { item } = route.params;
  console.log("item", item);
  return (
    <View className="bg-white h-full">
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="relative">
            <View className="flex flex-row justify-between h-12 items-center mb-5 mt-5 absolute w-full z-50 p-5">
              <TouchableOpacity
                className="bg-[#F5F6FA] p-4 rounded-full"
                onPress={() => navigation.goBack()}
              >
                <IconsOutline.ArrowLeftIcon color={"#000"} />
              </TouchableOpacity>
              <TouchableOpacity className="bg-[#F5F6FA] p-4 rounded-full">
                <IconsOutline.ShoppingBagIcon color={"#000"} />
              </TouchableOpacity>
            </View>
            <Image
              source={{ uri: item.img }}
              style={{ width: "100%", height: 300 }}
            />
          </View>
          <View className="flex flex-row mt-2 px-4">
            <View className="w-9/12">
              <Text className="text-[#8F959E] text-[13px] mb-2">
                Men's Printed Pullover Hoodie
              </Text>
              <Text className="font-bold text-[#1D1E20] text-[22px]">
                {item.name}
              </Text>
            </View>
            <View className="w-3/12">
              <Text className="text-[#8F959E] text-[13px] mb-2">Price</Text>
              <Text className="font-bold text-[#1D1E20] text-[22px]">
                $ {item.price}
              </Text>
            </View>
          </View>
          <View className="px-5 mt-5">
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              className="gap-2"
            >
              <Image
                source={{ uri: item.img }}
                style={{ width: 100, height: 100 }}
                className="rounded-lg shadow-lg"
              />
              <Image
                source={{ uri: item.img }}
                style={{ width: 100, height: 100 }}
                className="rounded-lg shadow-lg"
              />
              <Image
                source={{ uri: item.img }}
                style={{ width: 100, height: 100 }}
                className="rounded-lg shadow-lg"
              />
              <Image
                source={{ uri: item.img }}
                style={{ width: 100, height: 100 }}
                className="rounded-lg shadow-lg"
              />
              <Image
                source={{ uri: item.img }}
                style={{ width: 100, height: 100 }}
                className="rounded-lg shadow-lg"
              />
              <Image
                source={{ uri: item.img }}
                style={{ width: 100, height: 100 }}
                className="rounded-lg shadow-lg"
              />
              <Image
                source={{ uri: item.img }}
                style={{ width: 100, height: 100 }}
                className="rounded-lg shadow-lg"
              />
            </ScrollView>
          </View>
          {/* ========================== size ================== */}
          <View className="flex flex-row items-center justify-between mb-5 px-5 mt-5">
            <TextStyle content="Size" type="title" />
            <TouchableOpacity>
              <TextStyle content={"Size Guide"} type="thin" />
            </TouchableOpacity>
          </View>
          <View className="gap-1 w-full flex flex-row px-5">
            <TouchableOpacity className="w-3/12 bg-[#F5F6FA] h-20 rounded-xl">
              <Text className="leading-[80px] text-center  font-bold text-[#1D1E20] ">
                S
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-3/12 bg-[#F5F6FA] h-20 rounded-xl">
              <Text className="leading-[80px] text-center  font-bold text-[#1D1E20] ">
                M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-3/12 bg-[#F5F6FA] h-20 rounded-xl">
              <Text className="leading-[80px] text-center  font-bold text-[#1D1E20] ">
                L
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-3/12 bg-[#F5F6FA] h-20 rounded-xl">
              <Text className="leading-[80px] text-center  font-bold text-[#1D1E20] ">
                XL
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row items-center justify-between mb-5 px-5 mt-5">
            <TextStyle content="Description" type="title" />
          </View>
          <View className="px-5">
            <TextStyle
              content={
                "The Nike Throwback Pullover Hoodie is made from premium French terry fabric that blends a performance feel with "
              }
              type="thin"
            />
          </View>

          <View className="flex flex-row items-center justify-between mb-5 px-5 mt-5">
            <TextStyle content="Reviews" type="title" />
            <TouchableOpacity>
              <TextStyle content={"View all"} type="thin" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default DetailProduct;
