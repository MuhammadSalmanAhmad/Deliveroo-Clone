import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context';
import deliveryicon from '../DeliveryScreen/deliverytime.png'
import bike from "../DeliveryScreen/motorbike.png"
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../../features/restuarantSlice';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const DeliveryScreen = () => {
    let restaurantName = useSelector(selectRestaurant)
    let navigation=useNavigation()


    return (
        <View className="flex-1 bg-[#00CCBB]">
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between items-center my-2 mt-10" style={{ marginHorizontal: 20 }}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('Basket')
                    }}>
                        <XMarkIcon color={"white"} size={30} />
                    </TouchableOpacity>
                    <Text className="text-white text-lg font-bold">Order Help</Text>
                </View>
                <View className="bg-white rounded-lg  mt-10 py-5 px-8 pb-5  " style={{
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    height: "fit-content",
                    justifyContent: 'start',
                    width: 300,
                    alignSelf: 'center',
                    borderRadius: 20

                }}>
                    <Text className="text-xl  mt-5 font-bold text-gray-400 justify-start">Estimated Arrival</Text>
                    <View className="flex-row justify-start space-x-10 mt-2">
                        <Text className="text-3xl font-bold text-gray-800 justify-start ">45-50 mins</Text>
                        <Image source={deliveryicon} style={{
                            width: 50,
                            height: 50,
                            marginLeft: 10,
                            backgroundColor: "white",
                        }}></Image>

                    </View>
                    <Progress.Bar width={200} color='#00CCBB' indeterminate={true}></Progress.Bar>
                    <Text className="text-lg text-gray-400 mt-5">Your order at {restaurantName.brand} is being prepared</Text>

                </View>
                

            </SafeAreaView>
            
                   
                   <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    mapType='mutedStandard'
                    

                    
                    className="flex-1 -mt-10 z-0" />
                    <SafeAreaView className="bg-white flex-row items-center justify-between space-x-2 p-4 ">
                        <Image source={bike} className="rounded-full h-20 w-20 bg-teal-200">
                          
                        </Image>
                      <View>
                            <Text className="text-lg font-bold">Sonny Sangha</Text>
                            <Text className="text-gray-400">Your rider</Text>
                      </View>
                        <TouchableOpacity>
                            <Text className="text-[#00CCBB] font-bold text-xl">Call</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                   
                </View>

    
    );
}

export default DeliveryScreen;

const styles = StyleSheet.create({
    container: {
        height:200,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
/*
 <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    style={{ flex: 1, marginTop: -10, zIndex: 10 }} // updated to use style
                    mapType='mutedStandard'
                />
*/