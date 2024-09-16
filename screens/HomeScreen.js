import React, { useLayoutEffect, useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import logo from '../assets/logo.png'
import { AdjustmentsHorizontalIcon, ServerStackIcon, MagnifyingGlassIcon, UserIcon } from 'react-native-heroicons/outline';
import Categories from "./Home Screen Components/components/categories";
import Offers from "./Home Screen Components/components/Offers";
import Featured from "./Home Screen Components/components/Featured";
import FeaturedRows from "./Home Screen Components/components/FeaturedRows";
import SanityClient from "../sanity"

const Home = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        SanityClient.fetch(`
        *[_type=='category']{name,image}
      `).then((data) => {
            setCategories(data);
        });
    }, []);

    useEffect(() => {
        console.log("categories =", categories);
        categories.map((item) => {
            console.log(item.name);
            console.log(item.image.asset)
        });
    }, [categories]);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View className="flex-row p-3 mx-2 my-3 mt-8 items-center">
                <Image source={{
                    uri: "https://creativereview.imgix.net/content/uploads/2016/09/Deliveroo-Logo_Master.png?auto=compress,format&q=60&w=1200&h=601"
                }} style={{
                    width: 50, height: 50, marginLeft: 10,
                }} className="rounded-full"></Image>
                <View className="flex-1">
                    <Text className="text-xl font-bold">Deliveroo</Text>
                    <Text className="text-md ">Food Delivery</Text>
                </View>
                <UserIcon color={"#00CCBB"} size={40}></UserIcon>
            </View>
            <View className=" flex-row mx-5 my-1 items-center space-x-2">
                <View className="flex-1  flex-row items-center space-x-1 rounded bg-gray-200 px-10" >
                    <MagnifyingGlassIcon color={"#00CCBB"} ></MagnifyingGlassIcon>
                    <TextInput className=" py-1 bg-gray-200 flex-1  "
                        placeholder="Search">

                    </TextInput>

                </View>
                <AdjustmentsHorizontalIcon color={"red"}></AdjustmentsHorizontalIcon>
            </View>
            <ScrollView className="mr-2 ml-2 "
                contentContainerStyle={{

                    flexGrow: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    marginTop: 10,
                    paddingBottom: 100
                }}>
                {/* CATEGOTRIES*/}
                <Categories CategoriesData={categories}></Categories>



                {/* FEATURED ROWS*/}
                <FeaturedRows title={"Featured"} description={"Paid placements by our partners"}></FeaturedRows>


                <Featured></Featured>

                <FeaturedRows title={"Tasty Discounts"} description={"Everyone's been enjoying these tasty discounts!"}></FeaturedRows>

                <Featured></Featured>
                <FeaturedRows title={"Offer's near you"} description={"Why not support your local restuarant tonight!"}></FeaturedRows>
                <Offers></Offers>



            </ScrollView>

        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',

    },
    container: {

        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

/*
 headerRight:() => (
                <Ionicons name="cart" size={30} color="black" style={{marginRight:10}}/>
            ),
            headerLeft:() => (
                <Ionicons name="menu" size={30} color="black" style={{marginLeft:10}}/>
            )
*/