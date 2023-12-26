import React from "react";
import { Alert, SafeAreaView, ScrollView, Text, View } from "react-native";
import Button from "../components/button";
import DirectionalTop from "../components/directionalTop";
import Input from "../components/input";
const Login = () => {  
  const handleLogin = () => {

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
        <View className='w-full bg-slate-200 h-[2px] mt-5'></View>
        <View className="flex flex-row justify-between mt-5">
          {/* {
            socialList.map((_soc , index) =>(
              <Button key={_soc.name} content={_soc.name} size={'text-[15px]'} bg={_soc.bg} px={'px-5'} imageLink={_soc.icon} />
            ))
          } */}
          {/* <Button content={'Login with Facebook'} size={'text-[15px]'} bg={'bg-blue-500'} px={'px-5'} />
          <Button content={'Login with Google'} size={'text-[15px]'}  px={'px-5'}/> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Login
