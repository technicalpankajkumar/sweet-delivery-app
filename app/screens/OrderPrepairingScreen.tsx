import { View, Text,Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function OrderPrepairingScreen() {
  const navigation = useNavigation();
  
  useEffect(()=>{
    setTimeout(()=>{
       navigation.navigate('Delivery')
    },2000)
  })
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image source={require("../../assets/images/chef.jpg")} 
      className="h-80 w-80"/>
      <Text className="animate-pulse text-3xl text-slate-200 font-bold py-2">Your order is prepairing........</Text>
    </View>
  )
}