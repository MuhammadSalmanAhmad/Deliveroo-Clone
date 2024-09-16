import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { urlFor } from '../../sanity';
import { useState } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch,useSelector } from 'react-redux';
import { addItem, removeItem, selectBasketItems, selectTotalCost, selectTotalQuantity } from '../../features/basketSlice';

const MenuCard = ({ id,title, description, image, price }) => {
    let [isPressed, setPress] = useState(false)
    let [quantity, setQuantity] = useState(0)

    let items=useSelector(selectBasketItems)
    let Quantity=useSelector(selectTotalQuantity)
    let totalCost = useSelector(selectTotalCost)


    const dispatch=useDispatch()
    
    let addItemToBasket=()=>{
        dispatch(addItem({title,description,image,price,id}))
        
    }

    let RemoveItem=()=>{
        dispatch(removeItem({title,description,image,price,id}))
    }



   



    return (
        <>

            <TouchableOpacity onPress={() => {
                setPress(true)
                console.log(isPressed)
            }
            }>
                <View className="flex-row justify-between items-center p-4 m-2 bg-white rounded-lg shadow-lg" style={{

                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                }}>
                    <View className="w-7/12 ">
                        <Text className="text-lg font-bold mb-1">{title}</Text>
                        <Text className="text-sm text-gray-500 mb-1">{description}</Text>
                        <Text className="text-lg font-bold">Rs{price}</Text>
                    </View>
                    <Image source={{ uri: urlFor(image).url() }} className="w-24 h-20 rounded-lg" resizeMode="cover" />
                </View>


            </TouchableOpacity>
            {
                isPressed && (
                    <View className="mx-3 my-2">
                        <View className="flex-row space-x-2 p-3">
                            <TouchableOpacity onPress={
                                () => {
                                    if (quantity != 0) {
                                        setQuantity(quantity - 1)
                                    }
                                    RemoveItem()
                                    //console.log(items)
                                }
                            }>

                                <MinusCircleIcon color={quantity>0?'#00CCBB':"gray"} size={40}></MinusCircleIcon>
                            </TouchableOpacity>
                            <Text className="text-lg font-bold">{quantity}</Text>
                            <TouchableOpacity onPress={async() => {
                                setQuantity(quantity + 1)
                                addItemToBasket()
                               // await console.log(items)
                                
                            }}>
                                <PlusCircleIcon color={'#00CCBB'} size={40}></PlusCircleIcon>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }

        </>


    );
};

export default MenuCard;

/**
  let totalCost=()=>{
        let total=0
        items.map((item)=>{
            total+=item.price
        })
        return total
    }
 */
