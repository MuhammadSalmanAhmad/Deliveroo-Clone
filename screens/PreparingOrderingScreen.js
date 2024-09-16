import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import deliveryGif from '../assets/delivery.gif'; 
import * as Progress from 'react-native-progress';// Correct the path if necessary
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const PreparingOrderingScreen = () => {

    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(()=>{
            navigation.navigate('Delivery');

        },4000)
       
    }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#00CCBB] items-center justify-center space-y-3">
      <Animatable.Image 
        source={deliveryGif} 
        animation="slideInUp" 
        iterationCount={1} 
        className="w-64 h-64"
      />
      <Animatable.Text 
        animation="pulse" 
        iterationCount="infinite" 
        className="text-white font-extrabold text-xl mx-5 text-center"
      >
        Waiting for restaurant to accept your order
      </Animatable.Text>
      <Progress.Circle size={50} color='white' indeterminate={true} borderWidth={2}></Progress.Circle>
    </SafeAreaView>
  );
}

export default PreparingOrderingScreen;