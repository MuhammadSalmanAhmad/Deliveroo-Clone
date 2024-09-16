import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StarIcon ,MapPinIcon} from "react-native-heroicons/outline";
import React from 'react';

const FeaturedCard = ({ brand, description, location, image ,rating ,lat,long,dishes}) => {
  return (
    <TouchableOpacity style={styles.card} className="ml-5">
      <Image source={{ uri: image }} style={styles.image} resizeMode='cover'/>
      <Text style={styles.brand} className="text-lg">{brand}</Text>
      <View style={styles.row} className="space-x-3">
        <StarIcon color={"green"} size={25} />
        <Text className="font-medium">{rating}</Text>
        <Text className="font-medium">Offers</Text>
      </View>
      <View style={styles.row} className="space-x-3">
        <MapPinIcon color={"gray"}></MapPinIcon>
        <Text className="font-medium">{location}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#002",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  
  },
  image: {
    borderRadius: 10,
    height: 150, // Set a fixed height for the image
    width: '100%',
  },
  brand: {
    marginVertical: 10,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    
  

  },

};

export default FeaturedCard;
