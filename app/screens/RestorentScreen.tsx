import { View, Text, ScrollView, Image, TouchableOpacity, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../themes";
import start from "../../assets/images/star.png";
import DishRow from "@/components/DishRow";
import CartIcon from "@/components/CartIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "@/redux/slice_thunk/restaurantSlice";

export default function RestorentScreen() {
  const { params } = useRoute();
  const navigatiion = useNavigation();
  let { item } = params;

  const dispatch = useDispatch();
  useEffect(()=>{
     if(item &&  item?.id){
      dispatch(setRestaurant({...item}))
     }
  },[])

  return (
    <View>
      {/* cart icon  */}
      <CartIcon />
      {/* status bar */}
      <StatusBar barStyle={"dark-content"} />
      <ScrollView>
        <View className="fixed top-0">
          <Image className="w-full h-72 " source={item?.image} />
          <TouchableOpacity
            onPress={() => navigatiion.goBack()}
            className="absolute top-14 left-4 bg-gray-50 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item?.name}</Text>
            <View className="flex-row items-center space-x-1">
              <View className="flex-row item-center space-x-1">
                <Image className="h-4 w-4" source={start} />
                <Text className="text-xs">
                  <Text className="text-gray-700">
                    <Text className="text-green-700">{item?.ratings}</Text> (
                    {item?.reviews} review){" "}
                    <Text className="font-semibold">{item?.category}</Text>
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width="15" height="15" />
                <Text className="text-gray-700 text-xs">
                  Nearby . {item?.address}
                </Text>
              </View>
            </View>
              <Text className="text-gray-500 mt-2">{item?.description}</Text>
          </View>
        </View>
          <View className="pb-36 bg-gray-50">
            <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
            {/* dishes */}
            {
              item?.dishes?.length > 0  && item?.dishes?.map((dish,index)=>{
                return <DishRow item={dish} key={index} />
              })
            }
          </View>
      </ScrollView>
    </View>
  );
}
