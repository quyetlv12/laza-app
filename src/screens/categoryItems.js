import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import DirectionalTop from '../components/directionalTop'
import { ScrollView } from "react-native-gesture-handler";
import Card from "../components/card";
import { data } from "../configs";

const CategoryItems = ({ navigation, route }) => {
  const { cateName } = route.params;
  return (
    <SafeAreaView className="bg-white">
      <DirectionalTop title={cateName} />
      <ScrollView>
        <View className="flex flex-row flex-wrap">
          {data.map((item, index) => (
            <Card key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryItems;
