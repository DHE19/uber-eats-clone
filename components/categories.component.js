import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const items = [
  {
    image: require('../assets/img/location.png'),
    text: 'Pick up',
  },
  {
    image: require('../assets/img/cookie.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../assets/img/burger.png'),
    text: 'Fast Food',
  },
  {
    image: require('../assets/img/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    image: require('../assets/img/hot-deal.png'),
    text: 'Deals',
  },
  {
    image: require('../assets/img/coffee-cup.png'),
    text: 'Coffe & Tea',
  },
];

const Categories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item) => (
          <View style={styles.element} key={item.text}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 40,
    marginVertical: 5,
    resizeMode: 'contain',
  },

  container: {
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
  },

  text: { fontWeight: '600', color: '#000000' },
  element: { alignItems: 'center', marginHorizontal: 12 },
});
