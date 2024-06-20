import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../themes';
import * as Icon from 'react-native-feather';
import { features } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '@/redux/slice_thunk/restaurantSlice';
import { removeFromCart, selectCartItems, selectCartTotal } from '@/redux/slice_thunk/cartSlice';

export default function CartScreen() {
    const restaurant = useSelector(selectRestaurant);
    const navigation = useNavigation();
    const dispatch = useDispatch()
    
    const totalItems = useSelector(selectCartItems);
    const totalPrice = useSelector(selectCartTotal);
    const [mapItems,setMapItems] = useState({})

    useEffect(()=>{
       let item = totalItems?.reduce((group,i)=>{

        if(group[i.id]){
           group[i.id].push(i)
        }else{
            group[i.id] = [i]
        }
        return group;
       },{})
        setMapItems(item)
        if(!totalItems?.length){
           navigation.goBack()
        }
    },[totalItems])

  return (
    <View className="bg-white flex-1">
        {/* back button */}
        <View className="relative py-2 shadow-sm">
            <TouchableOpacity
              onPress={()=>navigation.goBack()} 
              style={{backgroundColor:themeColors.bgColor(1)}}
              className="aboslute z-10 rounded-full p-1 shadow top-7 left-2 w-8">
                <Icon.ArrowLeft strokeWidth={3} stroke={"white"} />
            </TouchableOpacity>
            <View>
                <Text className="text-center font-bold text-2xl">Your Cart</Text>
                <Text className="text-center text-gray-500">{restaurant?.name}</Text>
            </View>
        </View>
            {/* delivery time */}
            <View style={{backgroundColor:themeColors.bgColor(0.2)}} className="flex-row px-4 items-center">
                <Image source={require("../../assets/images/bikeguy.png")} className={'w-20 h-20 rounded-full'} />
                <Text className="flex-1 pl-4 text-lg font-extralight">Deliver in 20-40 minutes</Text>
                <TouchableOpacity>
                    <Text className="font-bold text-lg" style={{color:themeColors.text}}>Change</Text>
                </TouchableOpacity>
            </View>
            {/* dishes */}
            <ScrollView 
                className="bg-gray-50 pt-5"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:50}}>
                {
                   Object.entries(mapItems)?.map(([key,item]) => {
                       let dish = item[0];
                        return (
                            <View key={key} className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-lg">
                                <Text className="font-bold" style={{color:themeColors.text}}>{item?.length} X</Text>
                                <Image source={dish.image}  className="h-14 w-14 rounded-full" />
                                <Text className="flex-1 font0bold text-gray-700">{dish.name}</Text>
                                <Text className="font-samibold text-base">&#8377; {dish.price}</Text>
                                <TouchableOpacity 
                                onPress={()=> dispatch(removeFromCart({id: dish?.id}))}
                                className="p-1 rounded-full" style={{backgroundColor:themeColors.bgColor(1)}}>
                                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'}/>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>

            {/* totals */}
            <View style={{backgroundColor:themeColors.bgColor(0.2)}} className="p-6 px-8 rounded-3xl space-y-4">
               <View className="flex-row justify-between">
                  <Text className="text-gray-700">Subtotal</Text>
                  <Text className="text-gray-700">&#8377;{totalPrice}</Text>
               </View>
               <View className="flex-row justify-between">
                  <Text className="text-gray-700">Delivery fee</Text>
                  <Text className="text-gray-700">&#8377;40</Text>
               </View>
               <View className="flex-row justify-between">
                  <Text className="text-gray-700 font-extrabold">Order Total</Text>
                  <Text className="text-gray-700 font-extrabold">&#8377;{totalPrice + 40 }</Text>
               </View>
                <View>
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate('OrderPrepairing')}
                        style={{backgroundColor:themeColors.bgColor(1)}} className="p-3 rounded-full">
                        <Text className="text-white text-center font-bold text-lg">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
    </View>
  )
}