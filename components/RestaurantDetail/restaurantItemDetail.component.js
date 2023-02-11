import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RestaurantItemDetail = ({ imgPath, title, description }) => {
  return (
    <View>
      <Image source={{ uri: imgPath }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default RestaurantItemDetail;

const styles = StyleSheet.create({
  title: {
    fontSize: 29,
    fontWeight: '600',
    marginTop: 10,
    marginHorizontal: 15,
  },
  image: { width: '100%', height: 180 },
  description: {
    color: '#181D31',
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: '500',
    fontSize: 15.5,
  },
});
