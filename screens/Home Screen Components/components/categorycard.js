import { View, Text ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { urlFor } from '../../../sanity'

const Categorycard = ({imageURl,title}) => {
  return (
    <TouchableOpacity className="mx-4 mb-4 h-40 w-40 mr-2 relative bg-gray-300" style={{
        borderRadius: 10,
        
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        
    }}>
      <Image source={{
        uri: urlFor(imageURl).url()
      }}  style={{

            
            borderRadius:10,
            height: '100%',
            width: '100%',
      }} resizeMode='cover'></Image>
      <Text className="text-lg font-bold -translate-y-8 text-red-200 translate-x-2" >{title}</Text>
    </TouchableOpacity>
  )
}

export default Categorycard