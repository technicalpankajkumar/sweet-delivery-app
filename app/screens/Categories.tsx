import { View, Text, ScrollView, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import {Category} from '../constants/index'

export default function Categories() {
    const [activeCategory,setActiveCategory] = useState(null)
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}
       className="overflow-visible"
       contentContainerStyle={{
        paddingHorizontal:15
       }}>
        {
            Category?.map((categ,index)=>{
                let isActive = categ.id == activeCategory;
                let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
                let textClsss = isActive ? 'font-semibold text-gray-800' :"text-gray-500";
                
                return <View key={index} className="flex justify-center items-center mr-6">
                        <TouchableOpacity
                          onPress={()=>setActiveCategory(categ.id)}
                          className={`p-1 rounded-md shodow bg-gray-100 ${btnClass}`}>
                            <Image style={{width: 70, height:45, resizeMode: 'contain'}} source={categ.image}/>
                          </TouchableOpacity> 
                            <Text className={`text-sm ${textClsss}`}>{categ.name}</Text>
                </View>
            })
        }

      </ScrollView>
    </View>
  )
}