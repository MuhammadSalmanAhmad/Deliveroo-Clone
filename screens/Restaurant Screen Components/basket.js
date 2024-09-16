import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { useDispatch,useSelector } from 'react-redux';
import { addItem, removeItem, selectBasketItems, selectTotalCost, selectTotalQuantity } from '../../features/basketSlice';
import { useNavigation } from '@react-navigation/native';

const BasketButton = () => {
    let items=useSelector(selectBasketItems)
    let Quantity=useSelector(selectTotalQuantity)
    let totalCost = useSelector(selectTotalCost)
    const navigation = useNavigation();
  return (
    <View className="absolute bottom-8 w-full z-50">
        <TouchableOpacity className="flex-row space-x-4 p-4 justify-evenly mx-5 rounded-lg"style={{
        backgroundColor:"#00CCBB"
    }}
    onPress={()=>{
        navigation.navigate('Basket')
    }}>
       <Text  className="text-white font-extrabold text-lg text-center bg-[#01A296] py-1 px-2">{Quantity}</Text> 
      <Text className="text-white font-extrabold text-lg text-center">View Basket </Text>
      <Text className="text-white font-extrabold text-lg text-center">Rs {totalCost}</Text>
    </TouchableOpacity>


    </View>
    
  )
}

export default BasketButton