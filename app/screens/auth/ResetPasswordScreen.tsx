import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    TextInput,
    ToastAndroid,
  } from "react-native";
  import React, { useState } from "react";
  import { themeColors } from "@/app/themes";
  import { ArrowLeft } from "react-native-feather";
  import { useNavigation } from "@react-navigation/native";
  import { fetchSignInMethodsForEmail, sendPasswordResetEmail, updateProfile } from "firebase/auth";
  import { auth } from "@/config/firebase";
  import ToastMessage from "@/app/utils/ToastMessage";
  
  export default function ResetPasswordScreen() {
    const navigation = useNavigation();
    const [email,setEmail] = useState('')
  
      const handleResetPassword = async()=>{
          if(email){
              try{
                  await sendPasswordResetEmail(auth,email);
                  ToastMessage("Reset link successfully send !")
              } catch (error) {
                ToastMessage('Error checking email ID');
              }
          }
      }
  
    return (
      <SafeAreaView
        className={"flex-1"}
        style={{ backgroundColor: themeColors.bgColor(0.6) }}
      >
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-4 shadow-md border border-1 border-white"
            style={{ backgroundColor: themeColors?.bgColorSecond(0.9) }}
          >
            <ArrowLeft size="20" color={"black"} />
          </TouchableOpacity>
        </View>
        <View className="flex-col items-center justify-center">
          <Image
            source={require("../../../assets/images/forget_password.png")}
            style={{ width: 200, height: 200 }}
          />
          <Text className="text-2xl font-bold text-gray-100 pb-2">
            NAINA SWEETS HOUSE
          </Text>
        </View>
        <View
          style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
          className="flex-1 bg-white px-8 pt-8"
        >
          <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              value={email}
              placeholder="Enter your email"
              onChangeText={(value) => setEmail(value)}
            />
            <TouchableOpacity
              onPress={()=>navigation.navigate('Login')}
              className="flex items-end mb-5">
                <Text className="text-gray-700 ml-4">Login again?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleResetPassword}
              className="py-3 rounded-xl"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Text className="text-xl font-bold text-center text-white">
                Reset Password
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center mt-5">
            <Text className="text-gray-600 font-semibold">
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Sign-up")}>
              <Text className="font-semibold text-green-600">SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  