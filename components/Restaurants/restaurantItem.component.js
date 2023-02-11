import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const imagemock = 'https://media-cdn.tripadvisor.com/media/photo-s/18/15/b8/27/menu-motto.jpg';
const RestaurantItem = ({ restaurant, navigation }) => {
  const { name, image_url: image, rating } = restaurant;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('RestaurantDetail', { restaurant })}
      activeOpacity={0.85}
      style={styles.touchableContainer}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image === '' ? imagemock : image }} />
        <TouchableOpacity style={styles.heart}>
          <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
        </TouchableOpacity>
        <View style={styles.details}>
          <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.time}>45 - 40 min</Text>
          </View>
          <View style={styles.rate}>
            <Text>{rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  heart: { position: 'absolute', right: 18, top: 18 },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 13,
    color: 'gray',
  },
  rate: {
    backgroundColor: '#eee',
    height: 30,
    width: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  image: { width: '100%', height: 180, borderRadius: 5 },
  container: {
    marginTop: 10,
    padding: 15,
    backgroundColor: 'white',
  },
  touchableContainer: {
    marginBottom: 10,
  },
});
