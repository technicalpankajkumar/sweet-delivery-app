import React from 'react'
import { View,Text, SafeAreaView, StatusBar, TextInput, ScrollView } from 'react-native'
import * as Icon from 'react-native-feather'
import {themeColors} from "../themes/index"
import Categories from './Categories'
import FeatureRow from '@/components/FeatureRow'
import { features } from '../constants'

export default function HomeScreen() {
  return (
    <SafeAreaView className={'bg-white'}>
        <StatusBar barStyle="dark-content"/>
        <ScrollView>
          {/* search bar here */}
        <View className={'flex-row flex-1 items-center space-x-2 px-4 pb-2 mt-2 fixed top-1 mb-3'} >
          <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
              <Icon.Search height="25" width="25" stroke="gray" />
              <TextInput placeholder='Restaurents' className="ml-2 flex-1" />
              <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                <Icon.MapPin height="20" widht="20" stroke="gray" />
                <Text className="text-gray-600" >Lucknow 226022</Text>
              </View>
          </View>
          <View style={{backgroundColor:themeColors.bgColor(1)}} className="p-3 bg-gray-300 rounded-full">
            <Icon.Sliders height="20" width="20" strockWidth={2.5} stroke="white" />
          </View>
        </View>
        </ScrollView>
        {/* main */}
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:70}}>
          {/* category */}
            <Categories />

          {/* feature */}
        <View className="mt-5">
           {
            [features,features,features,features]?.map((item,i)=>{
              return <FeatureRow key={i} title={item.title} restaurants={item.restaurants} description={item.description}/>
            })
           }
        </View>
        </ScrollView>
        
    </SafeAreaView>
  )
}
