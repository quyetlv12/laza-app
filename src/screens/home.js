import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import HttpClient from "../auth/Client";
import Card from "../components/card";
import DirectionalTop from "../components/directionalTop";
import TextStyle from "../components/text";
import { CATEGORY_ITEMS, fashionBrands } from "../configs";
import { getProductAsync } from "../redux/slices/cartSlice";
import {
  getAllProducts,
  getProductsAsync,
  isLoading,
  products,
} from "../redux/slices/productSlice";
import { isArrayEmpty } from "../utility";
import CardKeleton from "../components/cardKeleton";
import Skeleton from "native-base/src/components/composites/Skeleton/Skeleton";

const Home = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const _NUMBER_SKELETON = 4;
  const dispatch = useDispatch();
  const productsSlice = useSelector(products);
  const isLoadingApp = useSelector(isLoading);
  useEffect(() => {
    if (isFocused) {
      dispatch(getProductsAsync());
      dispatch(getProductAsync());
    }
  }, [isFocused]);

  return (
    <SafeAreaView className="bg-white">
      <View className="px-2">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <StatusBar barStyle="dark-content" />
          </View>
          <DirectionalTop />

          <View className="mb-5">
            <TextStyle content={"Hello"} type={"bold"} />
            <TextStyle content={"Welcome to Laza."} type="subTitle" />
          </View>
          <View className="mb-5">
            <View className="flex flex-row items-center justify-between">
              <TextStyle content={"Hãng nổi bật"} type="title" />
              <TouchableOpacity>
                <TextStyle content={"View all"} type="thin" />
              </TouchableOpacity>
            </View>
            <View className="mt-5">
              <ScrollView
                horizontal={true}
                className="gap-2"
                showsHorizontalScrollIndicator={false}
              >
                {isArrayEmpty(fashionBrands)
                  ? [...Array(_NUMBER_SKELETON)].map((_elt, index) => (
                      <View
                        className="mr-2 bg-[#F5F6FA] p-3 rounded-2xl flex flex-row items-center gap-2"
                        key={index}
                      >
                        <Skeleton
                          borderWidth={1}
                          borderColor="coolGray.200"
                          endColor="warmGray.50"
                          size="20"
                          rounded="full"
                        />
                        <Skeleton.Text className="w-[100px]" />
                      </View>
                    ))
                  : fashionBrands.map((item, index) => (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        key={item.id}
                        className="flex flex-row items-center rounded-2xl bg-[#F5F6FA] py-3 px-2"
                        onPress={() =>
                          navigation.navigate(CATEGORY_ITEMS, {
                            cateName: item.name,
                          })
                        }
                      >
                        <View className="mr-2 bg-white p-3 rounded-2xl">
                          <Image
                            source={{ uri: item.logo }}
                            style={{ width: 30, height: 30 }}
                          />
                        </View>
                        <TextStyle content={item.name} type="brand" />
                      </TouchableOpacity>
                    ))}
              </ScrollView>
            </View>
          </View>
          {/* //============================== */}
          <View>
            <View className="flex flex-row items-center justify-between mb-5">
              <TextStyle content="Sản phẩm nổi bật" type="title" />
              <TouchableOpacity>
                <TextStyle content={"View all"} type="thin" />
              </TouchableOpacity>
            </View>
            <View className="flex flex-row flex-wrap">
              {isArrayEmpty(productsSlice) && isLoadingApp
                ? [...Array(_NUMBER_SKELETON)].map((item, index) => (
                    <CardKeleton key={index} />
                  ))
                : productsSlice.map((item, index) => (
                    <Card key={item.id} item={item} />
                  ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
