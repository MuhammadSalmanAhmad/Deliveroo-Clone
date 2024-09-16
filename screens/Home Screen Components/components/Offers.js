import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Offerscard from './offerscard'
import client from '../../../sanity'

const Offers = () => {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        client.fetch(`
           *[_type == 'restuarant']{
  name,
  rating,
  location,
  image,
  description,
  'dishes': Dishes[]->{name,description,image,price,_id}
}

            `).then((data) => {
            setOffers(data);

            console.log(data)

        });
    }, [])

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
            {
                offers.map((item => {
                    return <Offerscard key={item.name} id={item.id} brand={item.name} image={item.image} rating={item.rating} location={item.location} description={item.description} dishes={item.dishes}></Offerscard>
                }))
            }

        </ScrollView>
    )
}

export default Offers