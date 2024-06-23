import React from 'react'
import { View,Text, SafeAreaView, StatusBar, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import * as Icon from 'react-native-feather'
import {themeColors} from "../themes/index"
import Categories from './Categories'
import FeatureRow from '@/components/FeatureRow'
import { features,todayDeals } from '../constants'
import { signOut } from 'firebase/auth'
import { auth } from '@/config/firebase'
import ToastMessage from '../utils/ToastMessage'
import useAuth from '@/hooks/useAuth'
import TodayDeals from '@/components/deals/TodayDeals'

export default function HomeScreen() {
  const {user} = useAuth();
  const handleLogout= async()=>{
        await signOut(auth);
        ToastMessage("User succesfully logout!")
  }

  return (
    <SafeAreaView className={'bg-white h-full'}>
        <StatusBar barStyle="dark-content"/>
        <ScrollView scrollEnabled={false} className={'my-2 bg-white'}>
          {/* search bar here */}
        <View className={'flex-row flex-1 items-center space-x-2 px-4 pb-2 fixed top-1 h-24'} >
          <View className="flex-row flex-1 items-center p-2 rounded-full border border-gray-300 mb-5">
              <Icon.Search height="25" width="25" stroke="gray" />
              <TextInput placeholder='Restaurents' className="ml-2 flex-1" />
              <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                <Icon.MapPin height="20" widht="20" stroke="gray" />
                <Text className="text-gray-600" >Lucknow 226022</Text>
              </View>
          </View>
          <View style={{backgroundColor:themeColors.bgColor(1)}} className="p-3 bg-gray-300 rounded-full mb-5">
            <Icon.Sliders height="20" width="20" strockWidth={2.5} stroke="white" />
          </View>
        </View>
        </ScrollView>
        {/* main */}
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingTop:0}}>
          {/* category */}
            <Categories />

          {/* feature */}
          <View className="mt-5">
            {
              [features]?.map((item,i)=>{
                return <FeatureRow key={i} title={item.title} restaurants={item.restaurants} description={item.description}/>
              })
            }
            {
              [todayDeals]?.map((item,i)=>{
                return <TodayDeals key={i} title={item.title} restaurants={item.restaurants} description={item.description}/>
              })
            }
          </View>
        </ScrollView>
        <View className="flex-row justify-between items-center px-4 h-16 fixed bottom-0 left-0 right-0 z-10 bg-white shadow-xl border border-gray-100">
              <TouchableOpacity className="bg-gray-50 rounded-lg p-2" onPress={handleLogout}>
              <Icon.LogOut stroke={"gray"} strokeWidth={2} height={30} width={30} />
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-50 rounded-lg p-2">
              <Icon.User stroke={"gray"} strokeWidth={2} height={30} width={30} />
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-50 rounded-lg p-2">
              <Icon.User stroke={"gray"} strokeWidth={2} height={30} width={30} />
              </TouchableOpacity>
        </View>

    </SafeAreaView>
  )
}
