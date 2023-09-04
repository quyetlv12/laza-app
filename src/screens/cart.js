import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Alert, Dimensions } from "react-native";
import React from "react";
import DirectionalTop from "../components/directionalTop";
import CardHorizontal from "../components/cardHorizontal";
import * as IconsOutline from "react-native-heroicons/outline";
import PaymentType from "../components/paymentType";
import InfoPaymentRow from "../components/infoPaymentRow";

const Cart = () => {
  const deliveryIcon = require('../../assets/cart/delivery.png')
  const paymentTypeIcon = require('../../assets/cart/visa.png')
  const handleCheckout = () => {
    Alert.alert(
      'Notification',
      "Order success !"
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ bottom: 'never' }} className="bg-white">
    <DirectionalTop />
      {/* ======================ITEM =========== */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flex: 0}} className="px-2">
        <CardHorizontal />
        <CardHorizontal />
        <CardHorizontal />
        <View className="flex flex-row items-center justify-between mb-3">
          <Text className="font-bold text-[17px]">
            Delivery Address
          </Text>
          <TouchableOpacity>
            <IconsOutline.ChevronRightIcon color="#000" />
          </TouchableOpacity>
        </View>
        <PaymentType title={"Chhatak, Sunamgonj 12/8AB"} subTitle={'Sylhet'} icon={deliveryIcon} />
        {/* =================PAYMENT TYPE============ */}
        <View className="flex flex-row items-center justify-between mb-3">
          <Text className="font-bold text-[17px]">
            Payment Method
          </Text>
          <TouchableOpacity>
            <IconsOutline.ChevronRightIcon color="#000" />
          </TouchableOpacity>
        </View>
        <PaymentType title={"Chhatak, Sunamgonj 12/8AB"} subTitle={'**** 7690'} icon={paymentTypeIcon} />
        {/* =====================INFO=============== */}
        <View className="flex flex-row items-center justify-between mb-3">
          <Text className="font-bold text-[17px]">
            Order Info
          </Text>
        </View>
        <View>
          <InfoPaymentRow title={'Subtotal'} price={'110'} />
          <InfoPaymentRow title={'Shipping cost'} price={'10'} />
          <InfoPaymentRow title={'Total'} price={'120'} />
        </View>
        {/* ============================== */}
        <View>
          <TouchableOpacity className="bg-indigo-500  py-4 rounded-lg shadow-sm mt-5" onPress={handleCheckout}>
            <Text className="text-center text-white uppercase text-sm font-bold">Checkout</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
