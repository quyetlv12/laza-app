import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as IconsOutline from "react-native-heroicons/outline";
import { useToast } from "react-native-toast-notifications";
import { useDispatch, useSelector } from "react-redux";
import CardHorizontal from "../components/cardHorizontal";
import DirectionalTop from "../components/directionalTop";
import Empty from "../components/empty";
import InfoPaymentRow from "../components/infoPaymentRow";
import PaymentType from "../components/paymentType";
import { INFO_PAYMENT, SC } from "../configs";
import {
  deteleItemRX,
  deteteProductAsync,
  getProductAsync,
  minusQuantityItem,
  plusQuantityItem,
  productsInCart,
} from "../redux/slices/cartSlice";
import { isArrayEmpty } from "../utility";
import { CartService } from "../../services/cart";

const Cart = () => {
  const toast = useToast();
  const isFocused = useIsFocused();
  const deliveryIcon = require("../../assets/cart/delivery.png");
  const paymentTypeIcon = require("../../assets/cart/visa.png");
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleCheckout = () => {
    navigation.navigate(INFO_PAYMENT);
  };
  const [pre, setPre] = useState(0);
  const reActionApi = () => {
    setPre((pre) => ++pre);
  };
  const deleteItem = (item) => {
    Alert.alert("Alert", "Bạn có muốn xoá sản phẩm khỏi giỏ hàng ?", [
      {
        text: "Huỷ",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Xoá",
        onPress: async () => {
          const res = await CartService.deleteItemInCart(item.id);
          if (res.status === 200) {
            toast.show("Xoá sản phẩm thành công", { type: SC });
            dispatch(deteleItemRX(item))
          }
        },
      },
    ]);
  };
  const plusQuantity = async (item) => {
    const _data = {
      quantity : ++item.quantity
    }
    const res = await CartService.updateItemInCart(item.id , _data);
    if (res.status === 200) {
      dispatch(plusQuantityItem(item));
    }
  };
  const minusQuantity = async (item) => {
    const _data = {
      quantity : --item.quantity
    }
    const res = await CartService.updateItemInCart(item.id , _data);
    if (res.status === 200) {
      dispatch(minusQuantityItem(item));
    }
  };
  const products = useSelector(productsInCart);
  const totalPrice = products.reduce((accumulator, currentItem) => {
    const itemPrice = parseFloat(currentItem.products.price);
    const itemQuantity = currentItem.quantity;
    return accumulator + itemPrice * itemQuantity;
  }, 0);
  const renderItem = () => {
    return products.map((_item, index) => (
      <CardHorizontal
        key={index}
        item={_item}
        deleteItem={deleteItem}
        plusQuantity={plusQuantity}
        minusQuantity={minusQuantity}
      />
    ));
  };
  useEffect(() => {
    if (isFocused) {
      dispatch(getProductAsync());
    }
  }, [isFocused, pre]);

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white">
      <DirectionalTop title="Giỏ hàng" isShowRightButton={false} />
      {/* ======================ITEM =========== */}
      {!isArrayEmpty(products) ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 0 }}
          className="px-2"
        >
          <View className="px-2">
            {renderItem()}
            {/* <CardHorizontal />
        <CardHorizontal />
        <CardHorizontal /> */}
          </View>
          <View className="flex flex-row items-center justify-between mb-3">
            <Text className="font-bold text-[17px]">Delivery Address</Text>
            <TouchableOpacity>
              <IconsOutline.ChevronRightIcon color="#000" />
            </TouchableOpacity>
          </View>
          <PaymentType
            title={"Chhatak, Sunamgonj 12/8AB"}
            subTitle={"Sylhet"}
            icon={deliveryIcon}
          />
          {/* =================PAYMENT TYPE============ */}
          <View className="flex flex-row items-center justify-between mb-3">
            <Text className="font-bold text-[17px]">Payment Method</Text>
            <TouchableOpacity>
              <IconsOutline.ChevronRightIcon color="#000" />
            </TouchableOpacity>
          </View>
          <PaymentType
            title={"Chhatak, Sunamgonj 12/8AB"}
            subTitle={"**** 7690"}
            icon={paymentTypeIcon}
          />
          {/* =====================INFO=============== */}
          <View className="flex flex-row items-center justify-between mb-3">
            <Text className="font-bold text-[17px]">Order Info</Text>
          </View>
          <View>
            {/* <InfoPaymentRow title={"Subtotal"} price={"110"} />
          <InfoPaymentRow title={"Shipping cost"} price={"10"} /> */}
            <InfoPaymentRow title={"Total"} price={totalPrice} />
          </View>
          {/* ============================== */}
          <View>
            <TouchableOpacity
              activeOpacity={0.7}
              className="bg-indigo-500  py-4 rounded-lg shadow-sm mt-5"
              onPress={handleCheckout}
            >
              <Text className="text-center text-white uppercase text-sm font-bold">
                Thanh toán
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (
        <Empty />
      )}
    </SafeAreaView>
  );
};

export default Cart;
