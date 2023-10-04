import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as IconsOutline from "react-native-heroicons/outline";
import TextStyle from "../components/text";
import { CART } from "../configs";
import Button from "../components/button";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, productsInCart } from "../redux/slices/cartSlice";
import { Alert } from "react-native";

const DetailProduct = ({ navigation, route }) => {
  const { item } = route.params;
  const [size, setSize] = useState(null);
  const [imageSelect, setImageSelect] = useState("");
  const [quantity, setQuantity] = useState(1);
  const products = useSelector(productsInCart);
  const dispatch = useDispatch();
  const handleChangeImage = (link) => {
    setImageSelect(link);
  };
  const handleAddToCart = () => {
    if (!size) {
      Alert.alert("Please select size !");
      return;
    }
    const _item = {
      ...item,
      quantity: quantity,
      sizeSelect: size,
    };
    dispatch(addToCart(_item));
    Alert.alert("Thêm vào giỏ hàng thành công !");
  };
  const plusQuantity = () => {
    const qtt = quantity + 1;
    setQuantity(qtt);
  };
  const minusQuantity = () => {
    const qtt = quantity - 1;
    setQuantity(qtt);
  };
  useEffect(() => {
    setImageSelect(item.img);
  }, []);

  return (
    <SafeAreaView className="bg-white" style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="relative">
          <View className="flex flex-row justify-between h-12 items-center mb-5 mt-5 absolute w-full z-50 p-5">
            <TouchableOpacity
              className="bg-[#F5F6FA] p-4 rounded-full"
              onPress={() => navigation.goBack()}
            >
              <IconsOutline.ArrowLeftIcon color={"#000"} />
            </TouchableOpacity>
            <View className="relative">
              <TouchableOpacity
                className="bg-[#F5F6FA] p-4 rounded-full"
                onPress={() => navigation.navigate(CART)}
              >
                <IconsOutline.ShoppingBagIcon color={"#000"} />
              </TouchableOpacity>
              <View className="absolute top-0 right-0  bg-red-500 flex items-center justify-center rounded-full h-6 w-6">
                <Text className="text-white">{products.length}</Text>
              </View>
            </View>
          </View>
          {imageSelect && (
            <Image
              source={{ uri: imageSelect }}
              style={{ width: "100%", height: 300 }}
            />
          )}
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
            {item.listImage.map((img, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleChangeImage(img)}
              >
                <Image
                  source={{ uri: img }}
                  style={{ width: 100, height: 100 }}
                  className={`rounded-lg shadow-lg border-4`}
                />
              </TouchableOpacity>
            ))}
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
          {item?.size.map((_size, index) => (
            <TouchableOpacity
              activeOpacity={0.7}
              className={`w-3/12 bg-[#F5F6FA] h-20 rounded-xl ${
                size === _size && "border-2 border-indigo-500"
              }`}
              key={_size}
              onPress={() => setSize(_size)}
            >
              <Text className="leading-[80px] text-center  font-bold text-[#1D1E20] ">
                {_size}
              </Text>
            </TouchableOpacity>
          ))}
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
      <View
        className="flex flex-row items-center w-full py-1 bg-[#333] justify-around"
        style={styles.fixedElement}
      >
        <View className="flex flex-row items-center gap-2">
          <TouchableOpacity onPress={minusQuantity}>
            <IconsOutline.MinusIcon size={35} />
          </TouchableOpacity>
          <View className="bg-gray-100 p-4 rounded-md">
            <Text className="text-xl ">{quantity}</Text>
          </View>
          <TouchableOpacity onPress={plusQuantity}>
            <IconsOutline.PlusIcon size={35} />
          </TouchableOpacity>
        </View>
        <Button
          content={"Thêm vào giỏ hàng"}
          onPress={handleAddToCart}
          w={"w-full"}
          px={'px-2'}
        />
      </View>
    </SafeAreaView>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fixedElement: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    zIndex: 1,
  },
});
