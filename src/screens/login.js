import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import DirectionalTop from '../components/directionalTop'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Login = ({ navigation, route }) => {
  return (
    <SafeAreaView className="bg-white h-screen">
     <DirectionalTop />
     <View>
      <Text className='text-[28px] text-center font-bold mt-[5%]'>Let’s Get Started</Text>
      <View className='text-[5%] flex flex-col justify-center items-center'>
        <TouchableOpacity>
          <Text>fdfdf</Text>
        </TouchableOpacity>
      </View>
     </View>
    </SafeAreaView>
  )
}

export default Login