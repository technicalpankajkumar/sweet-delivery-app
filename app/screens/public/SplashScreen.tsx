import { View, Text ,Image,StyleSheet} from 'react-native'
import React, { useEffect } from 'react'
import { themeColors } from '@/app/themes'
import { AppDetails } from '@/app/constants/common'
import { useNavigation } from '@react-navigation/native'
import useAuth from '@/hooks/useAuth'

export default function SplashScreen() {

  const navigation = useNavigation()
  const {user} = useAuth();

  useEffect(()=>{
      let holdtimeOut = setTimeout(()=>{
        navigation.navigate(user ? "Home" : "Welcome")
      },1000)
    return ()=> {
      clearTimeout(holdtimeOut)
    }
  },[user])

  return (
    <View style={{flex:1,flexDirection:'column',justifyContent:"center", alignItems:"center",backgroundColor:themeColors.bgColor(2)}}>
       <Image 
       source={require("../../../assets/images/chef.jpg")} 
       style={{height:90,width:90,borderRadius:20}} />
        <Text 
        style={{fontSize:20,color:"white",marginTop:10,fontWeight:"bold"}}
        >
         {AppDetails.appName}
        </Text>
    </View>
  )
}

const style = StyleSheet.create({

})