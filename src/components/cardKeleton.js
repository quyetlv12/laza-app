// import { View} from "react-native";
import { Box, Center, Skeleton, Text, VStack, View } from "native-base";
import React from "react";

const CardKeleton = () => {
  return (
    <View className='w-1/2 p-1 pb-2'>
    <VStack w="100%%" maxW="400" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{
    borderColor: "coolGray.500"
  }} _light={{
    borderColor: "coolGray.200"
  }}>
      <Skeleton h="40" />
      <Skeleton.Text px="4" pb={5} />
    </VStack>
  </View>
  );
};

export default CardKeleton;
