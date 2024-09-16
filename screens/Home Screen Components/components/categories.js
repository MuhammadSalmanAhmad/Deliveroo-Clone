import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Categorycard from './categorycard'



const Categories = ({CategoriesData}) => {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10, justifyContent: "space-evenly", alignContent: "space-between" }}
            style={{
                
                borderRadius: 10,

            }}
        >
            {/*Category Card */}
           {
            CategoriesData.map((item=>{
                return <Categorycard key={item.name} title={item.name} imageURl={item.image}></Categorycard>
            }))
           }

        </ScrollView>
    )
}

export default Categories