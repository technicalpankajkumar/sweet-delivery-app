import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { themeColors } from "@/app/themes";
import { ArrowLeft } from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
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
          NAINA SWEET HOUSE
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
            value="pankaj@pankaj_software.com"
            placeholder="Enter the email"
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            secureTextEntry
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
            value="password@123"
            placeholder="Enter the password"
          />
          <TouchableOpacity className="flex items-end mb-5">
            <Text className="text-gray-700 ml-4">Forget password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-3 rounded-xl"
            style={{ backgroundColor: themeColors.bgColor(1) }}
          >
            <Text className="text-xl font-bold text-center text-white">
              Login
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
