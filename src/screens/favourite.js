import React from "react";
import { SafeAreaView, View } from "react-native";
import Card from "../components/card";
import DirectionalTop from '../components/directionalTop'
import { FAVOURITE, data } from "../configs";
import { ScrollView } from "react-native";
import { Text } from "react-native";
import * as IconsOutline from "react-native-heroicons/outline";

const Favourite = ({ navigation, route }) => {
  return (
    <SafeAreaView className="bg-white h-screen">
      <DirectionalTop title="Favourite" />
      <ScrollView>
        <View className="px-3 flex flex-row items-center mb-5 gap-3">
          <Text ><IconsOutline.Bars3BottomLeftIcon color={'#000'} size={35} /></Text>
          <Text className="text-[16px] font-bold text-lg"> Total item : {data.length}</Text>
        </View>
        <View className="flex flex-row flex-wrap">
          {data.map((item, index) => (
            <Card key={item.id} item={item} page={FAVOURITE} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favourite;
