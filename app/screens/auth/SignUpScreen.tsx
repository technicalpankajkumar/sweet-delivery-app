import { View, Text, TouchableOpacity, SafeAreaView,Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { ArrowLeft } from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '@/app/themes';
import { auth } from '@/config/firebase';
import ToastMessage from '@/app/utils/ToastMessage';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function SignUpScreen() {
    const navigation = useNavigation();
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = async()=>{
        if(email && password){
            try{
                await createUserWithEmailAndPassword(auth,email,password);
           //   await userCredential.user.sendEmailVerification();
                ToastMessage("Sign-up successfully done !")

            }catch(err){
                console.log(err,"err")
                if (err?.code === 'auth/email-already-in-use') {
                    ToastMessage('This email address is already in use.');
                  } else {
                      ToastMessage("Sign up crediential is wrong !")
                  }
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
            source={require("../../../assets/images/sweet_chef.png")}
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
          <Text className="text-gray-700 ml-4">Full Name</Text>
            <TextInput
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              value={name}
              onChangeText={(value)=> setName(value)}
              placeholder="Enter your name"
            />
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              value={email}
              placeholder="Enter the email"
              onChangeText={(value) => setEmail(value)}
            />
            <Text className="text-gray-700 ml-4 ">Password</Text>
            <TextInput
              secureTextEntry
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-4"
              value={password}
              placeholder="Enter the password"
              onChangeText={(value) => setPassword(value)}
            />
            
            <TouchableOpacity
              onPress={handleSubmit}
              className="py-3 rounded-xl"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Text className="text-xl font-bold text-center text-white">
                {"Sign Up"}
              </Text>
            </TouchableOpacity>
          </View>
          <Text className="text-xl text-gray-700 font-bold text-center py-5">
            OR
          </Text>
          <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image
                className="w-8 h-8"
                source={require("../../../assets/images/google_icon.webp")}
              />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image
                className="w-8 h-8"
                source={require("../../../assets/images/twitter_icon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image
                className="w-8 h-8"
                source={require("../../../assets/images/facebook_icon.png")}
              />
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center mt-5">
            <Text className="text-gray-600 font-semibold">
              Already have a account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text className="font-semibold text-green-600">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
}