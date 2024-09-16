import { View, Text, ScrollView, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { urlFor } from '../sanity';

import { StarIcon } from 'react-native-heroicons/solid'
import { ChevronDoubleRightIcon, MapPinIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import MenuCard from './Restaurant Screen Components/MenuCard';
import BasketButton from './Restaurant Screen Components/basket';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restuarantSlice';

const RestaurantScreen = ({ route, navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    let dispatch =useDispatch()

    useEffect(()=>{
        console.log(route.params)
        dispatch(setRestaurant(route.params))

    },[dispatch])

    const dishes= route.params.dishes
    console.log(dishes)


    return (
        <>
        <BasketButton></BasketButton>
         <ScrollView className="bg-white">
            <View className="relative">

                <View style={style.container}>

                    <Image source={{ uri: urlFor(route.params.image).url() }}
                        resizeMode='cover'
                        className="w-full h-56 p-4">
                    </Image>
                </View>
                <View className="mx-3 my-5">

                    <Text className="text-4xl font-bold bg-white ">
                        {route.params.brand}
                    </Text>
                    <View className="flex-1 flex-row justify-between mx-3 my-2">
                        <StarIcon color={'#689F38'} size={22} opacity={0.5} />
                        <Text className="text-lg font-semibold text-green-400 ">
                            {route.params.rating}
                        </Text>
                        <Text className="text-lg font-semibold text-gray-500">
                            Offers
                        </Text>

                        <MapPinIcon color={'gray'} size={25}>

                        </MapPinIcon>
                        <Text className="text-lg font-semibold text-gray-500">
                            Near by
                        </Text>
                        <Text className="text-lg font-semibold text-gray-500">
                            {route.params.location}
                        </Text>


                    </View>
                    <View  style={
                        {
                            borderBottomColor: '#D1D5DB',
                            borderBottomWidth: 2,
                            marginVertical: 10,
                        }
                    } className="mt-1 p-4 ">
                        <Text className="text-base text-gray-700 text-ellipsis text-justify ">
                            {route.params.description}
                        </Text>
                    </View>
                    <TouchableOpacity className="flex-row space-x-2 items-center mx-2 my-1 py-2" style={{

                        borderBottomColor: '#D1D5DB',
                        borderBottomWidth: 2,
                        marginVertical: 10,

                    }}>
                        <QuestionMarkCircleIcon color={'gray'} size={22}></QuestionMarkCircleIcon>
                        <Text className="text-base text-gray-700 font-medium flex-1 mb-1">
                            Have a food allergy ?
                        </Text>
                        <ChevronDoubleRightIcon color={'#00CCBB'} size={25}>
                        </ChevronDoubleRightIcon>
                    </TouchableOpacity>
                    <View className="pb-36">
                    <Text className="text-xl font-bold ">Menu</Text>
                    {
                        dishes.map((item) => {
                            return <MenuCard key={item.name} title={item.name} description={item.description} price={item.price} image={item.image} id={item._id}></MenuCard>
                        })

                    }
                    </View>
                    
                </View>
               
            </View>
        </ScrollView>
        </>
       
    );
};

export default RestaurantScreen;

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})