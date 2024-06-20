import { View, Text, SafeAreaView, TouchableOpacity,Image, TextInput } from 'react-native'
import React from 'react'
import { themeColors } from '@/app/themes'
import { ArrowLeft } from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
    const navigation = useNavigation()
  return (
   <SafeAreaView className={"flex-1"} style={{backgroundColor:themeColors.bgColor(1)}}>
          <View className="flex-row justify-start">
              <TouchableOpacity 
               onPress={()=>navigation.goBack()}
              className="p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-4 shadow-md border border-1 border-white" 
              style={{backgroundColor:themeColors?.bgColorSecond(0.9)}}>
                <ArrowLeft size="20" color={"black"} />
              </TouchableOpacity>
          </View>
          <View className="flex-col items-center justify-center">
            <Image source={require("../../../assets/images/namste.png")} 
            style={{width:200,height:200}}
            />
            <Text className="text-2xl font-bold text-gray-100 pb-2">NAINA SWEET HOUSE</Text>
          </View>
          <View 
          style={{borderTopLeftRadius: 50,borderTopRightRadius:50}}
          className="flex-1 bg-white px-8 pt-8">
            <View className="form space-y-2">
                <Text className="text-gray-700 ml-4">Email Address</Text>
                <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl"/>
            </View>
          </View>
   </SafeAreaView>
  )
}