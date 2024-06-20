import { View, Text, SafeAreaView,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '@/app/themes'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className={"flex-1"} style={{backgroundColor:"white"}}>
      <View className="flex-1 flex justify-evenly my-4">
        <Text className="text-black font-bold text-4xl text-center ">Let's Get Started !</Text>
        <View className="flex-col justify-center items-center">
        
            <Image 
            source={require("../../../assets/images/chef.jpg")} 
            style={{width:350,height:350}}
            />
            <Text className="text-gray-300 font-bold text-4xl text-center tracking-widest py-2 mt-2">NAINA SWEETS HOUSE</Text>
        </View>
        <View className="space-y-4">
            <TouchableOpacity 
             onPress={()=>navigation.navigate("Sign-up")}
            className="py-3 mx-7 rounded-xl" style={{backgroundColor:themeColors.bgColor(1)}}>
                <Text className="text-2xl font-bold text-center text-white">
                    Sign Up
                </Text>
            </TouchableOpacity>

            <View className="flex-row justify-center">
                <Text className="text-gray-600 font-semibold">Already have a account </Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                    <Text className="font-semibold text-green-600">Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
   </SafeAreaView>
  )
}