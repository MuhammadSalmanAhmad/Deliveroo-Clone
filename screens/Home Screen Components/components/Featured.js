import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FeaturedCard from './FeaturedCard'

const Featured = ({ title, imageurl }) => {
    return (
        <ScrollView
            contentContainerStyle={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                paddingHorizontal: 20,
                paddingVertical: 10

            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className="pt-4">
            <FeaturedCard brand={"KFC"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaG-TMgTfq4kMjtFhkBEela44xk8TIPrroHA&s"} rating={"4.2"} location={"Lahore"} dishes={[]}></FeaturedCard>
            <FeaturedCard brand={'Burger King'} image={'https://imageproxy.wolt.com/venue/65649f38d750e4643c883f83/b638f152-d345-11ee-b62a-6ec26134f011_fd436250_982e_11ee_9ac5_6ed35a7a8561_bk_hero__1_.jpg'}> </FeaturedCard>

        </ScrollView>
    )
}

export default Featured