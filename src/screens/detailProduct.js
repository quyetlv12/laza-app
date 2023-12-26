import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as IconsOutline from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/button";
import TextStyle from "../components/text";
import { CART, DG, SC } from "../configs";
import {
  addProductAsync,
  getProductAsync,
  productsInCart,
  updateItemAsync,
} from "../redux/slices/cartSlice";
import { useToast } from "react-native-toast-notifications";
import { unwrapResult } from "@reduxjs/toolkit";

const DetailProduct = ({ navigation, route }) => {
  const toast = useToast();
  const { item } = route.params;
  const [size, setSize] = useState(null);
  const [imageSelect, setImageSelect] = useState("");
  const [quantity, setQuantity] = useState(1);
  const products = useSelector(productsInCart);
  const dispatch = useDispatch();
  const [pre, setPre] = useState(0);
  const reactive = () => {
    setPre((pre) => ++pre);
  };
  const handleChangeImage = (link) => {
    setImageSelect(link);
  };
  const handleAddToCart = async () => {
    if (!size) {
      toast.show("Vui lòng chọn kích thước !", { type: DG });
      return;
    }
    const findItem = products.find(
      (_elt) =>
        Number(_elt.product_id) === Number(item?.id) && _elt.size === size
    );
    if (findItem && findItem.size === size) {
      const item = {
        quantity: findItem.quantity + quantity,
      };
      const resultAction = await dispatch(
        updateItemAsync({ id: findItem.id, item })
      );
      const originalPromiseResult = unwrapResult(resultAction);
      if (originalPromiseResult.status === 200) {
        toast.show("Thêm vào giỏ hàng thành công", { type: SC });
        setQuantity(1);
        reactive();
      }
    } else {
      const __item = {
        product_id: item.id,
        quantity: quantity,
        size: size,
      };
      const resultAction = await dispatch(addProductAsync(__item));
      const originalPromiseResult = unwrapResult(resultAction);
      if (originalPromiseResult.status === 201) {
        toast.show("Thêm sản phẩm thành công", { type: SC });
        setQuantity(1);
        reactive();
      }
    }
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
    dispatch(getProductAsync());
  }, [pre]);

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
          {/* {imageSelect && (
            <Image
              source={{ uri: imageSelect }}
              style={{ width: "100%", height: 300 }}
            />
          )} */}
          <Image
          
            source={{ uri: item.thumbnail }}
            style={{ width: "100%", height: 300 }}
          />
        </View>
        <View className="flex flex-row mt-2 px-4">
          <View className="w-9/12">
            <Text className="text-[#8F959E] text-[13px] mb-2">
              {item.cate_id
                ? item.categories.cate_name
                : "Không có danh mục sản phẩm"}
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
            {/* {JSON.parse(item.images).map((img, index) => (
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
            ))} */}
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
          {item.size.map((_size, index) => (
            <TouchableOpacity
              activeOpacity={0.7}
              className={`w-3/12 bg-[#F5F6FA] h-20 rounded-xl ${
                size && size === _size && "border-2 border-indigo-500"
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
          px={"px-2"}
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
