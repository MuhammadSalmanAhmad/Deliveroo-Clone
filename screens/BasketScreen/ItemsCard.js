import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { urlFor } from '../../sanity';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../features/basketSlice';

const ItemsCard = ({ dishImage, dishTitle, quantity, price }) => {
    let dispatch=useDispatch()
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginHorizontal: 8,
        marginBottom: 10,
        marginTop:10
      }}
    >
      <Text style={{ fontSize: 16, color: '#00CCBB', fontWeight: 'bold' }}>
        {quantity} X
      </Text>
      <Image
        source={{
          uri: urlFor(dishImage).url(),
        }}
        style={{
          width: 70,
          height: 70,
          backgroundColor: '#00CCBB',
          borderRadius: 35,
          marginLeft: 10,
        }}
      />
      <View style={{ flex: 1, marginLeft: 16 }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#333' }}>
          {dishTitle}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>
          Rs {price}
        </Text>
      </View>
      <TouchableOpacity onPress={() => 
        {
            console.log('Remove pressed')
           // dispatch(removeItem({title:dishTitle}))

        }
      }>
        <Text style={{ color: '#00CCBB', fontSize: 16, fontWeight: 'bold' }}>
          Remove
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemsCard;
