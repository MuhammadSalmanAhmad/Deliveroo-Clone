import { View, Text } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

const FeaturedRows = ({id,title,description}) => {
  return (
    <View> 
    <View className=" mt-4 px-4" style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        display:"flex"
    
    }}>
      <Text className="text-2xl font-bold text-black">
        {title}
      </Text>
      <ArrowRightIcon color={"#00CCBB"} />
    </View>
    <Text className="text-slate-600 font-medium text-base ml-4">
      {description}
    </Text>
  </View>
  )
}

export default FeaturedRows