import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem, selectBasketItems, selectTotalCost, selectTotalQuantity } from '../../features/basketSlice';
import { selectRestaurant } from '../../features/restuarantSlice';
import { useNavigation } from '@react-navigation/native';
import { XCircleIcon } from 'react-native-heroicons/solid'
import ItemsCard from './ItemsCard';


const BasketScreen = () => {
    let items = useSelector(selectBasketItems)
    const navigation = useNavigation();
    let restaurant = useSelector(selectRestaurant)

    const dispatch = useDispatch()
    let Quantity = useSelector(selectTotalQuantity)
    let SubTotal = useSelector(selectTotalCost)

    let totalCost = SubTotal + 100

    


    return (
        <SafeAreaView className="flex-1 "   >
            <ScrollView className="divide-y divide-gray-200">
                <View style={{ justifyContent: 'center', alignItems: 'center', }} className=" py-5 px-5  items-center flex-row bg-white">


                    <View className="flex-col flex-1">
                        <Text className="text-center text-black text-lg font-extrabold">Basket</Text>
                        <Text className="text-gray-600 font-medium text-center">{restaurant.brand}</Text>
                    </View>

                   <TouchableOpacity onPress={()=>{
                          navigation.goBack()
                   }}>
                   <XCircleIcon color={'#00CCBB'} size={30}></XCircleIcon>
                   </TouchableOpacity>

                </View>
                <View className="flex-row mt-10 bg-white py-5 justify-evenly items-center">

                    <Image source={{
                        uri: "https://img.icons8.com/fluency/48/delivery-scooter.png"
                    }} style={{
                        width: 50,
                        height: 50,
                        marginLeft: 10,
                        backgroundColor: "#00CCBB",
                        borderRadius: 25


                    }} >

                    </Image>

                    <Text className="text-base text-black items-center ">
                        Delivery in 50-75 min
                    </Text>
                    <TouchableOpacity onPress={() => {
                        console.log(items)
                    }}>
                        <Text className="text-[#00CCBB] text-lg font-semibold">
                            Change
                        </Text>

                    </TouchableOpacity>

                </View>
                {
                    items.map((item) => (
                        <ItemsCard
                            key={item.title} // Don't forget to add a unique key!
                            dishTitle={item.title}
                            dishImage={item.image}
                            quantity={item.quantity}
                            price={item.price}
                        />
                    ))
                }

            </ScrollView>

            <View className="bg-white p-5 space-y-4 mt-5">
                <View className="flex-row justify-between">
                    <Text className="text-gray-500 text-start text-base font-semibold">SubTotal</Text>
                    <Text className="text-black text-end text-base font-semibold">Rs {SubTotal}</Text>

                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-500 text-start text-base font-semibold">Delivery fee </Text>
                    <Text className="text-black text-end text-base font-semibold">Rs 100</Text>

                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-500 text-start text-base font-semibold">Order total</Text>
                    <Text className="text-black text-end text-base font-semibold">Rs {totalCost}</Text>

                </View>
                <TouchableOpacity onPress={()=>
                    {
                        navigation.navigate('PreparingOrderScreen')
                    }
                }
                 className="rounded-lg bg-[#00CCBB] p-4 items-center">
                    <Text className="text-xl text-center text-white font-extrabold">Place Order</Text>
                </TouchableOpacity>
            </View>




        </SafeAreaView>
    )
}

export default BasketScreen