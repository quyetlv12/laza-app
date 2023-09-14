import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import DirectionalTop from "../components/directionalTop";
import Input from "../components/input";
import { ScrollView } from "react-native";
import Button from "../components/button";
import { Alert } from "react-native";

const Login = ({ navigation, route }) => {
  const handleLogin = () =>{
    Alert.alert('Đăng nhập thành công !')
  }
  return (
    <SafeAreaView className="bg-white h-screen">
      <DirectionalTop isShowRightButton={false} />
      <ScrollView className="px-5">
        <Text className="text-4xl font-bold text-center text-indigo-500">
          Login
        </Text>
        <Input title="Email" className="border-2 border-indigo-300" type={'email-address'} />
        <Input title="Password" className="border-2 border-indigo-300" secureTextEntry={true} />
        <View>
          <Text className="text-right text-indigo-700 font-bold underline">Forgot your password?</Text>
        </View>
        <Button content={'Login'} mt={5} onPress={handleLogin} />
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
