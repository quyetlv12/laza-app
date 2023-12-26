import { View, Text, Image } from "react-native";
import React from "react";
import * as IconsOutline from "react-native-heroicons/outline";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FAVOURITE, PRODUCT_DEATAIL } from "../configs";
import { Alert } from "react-native";

const Card = ({ item, page }) => {
  const navigation = useNavigation();

  const hanleClickItem = () => {
    navigation.navigate(PRODUCT_DEATAIL, {
      item: item,
    });
  };
  const shouldLikeIconStatus = page !== FAVOURITE;
  const handleFavourite = () => {
    Alert.alert("Đã thêm vào danh sách yêu thích");
  };
  return (
    <TouchableOpacity
      className={`w-1/2 p-1 relative mb-5`}
      activeOpacity="0.8"
      onPress={hanleClickItem}
    >
      <View>
        <Image
          source={{ uri: item.thumbnail }}
          style={{ width: "100%", height: 300 }}
          className="rounded-2xl mb-2"
        />
        <Text className="max-w-full mb-2">{item.name}</Text>
        <Text className="font-bold text-[#1D1E20]">$ {item.price}</Text>
        {shouldLikeIconStatus && (
          <TouchableOpacity
            className="absolute top-[5%] right-[5%] bg-white rounded-full p-1"
            onPress={handleFavourite}
          >
            <IconsOutline.HeartIcon color={"#8F959E"} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
