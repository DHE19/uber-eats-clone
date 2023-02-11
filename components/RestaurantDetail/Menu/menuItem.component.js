import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';

const MenuItem = ({ image, price, description, title }) => {
  const setDescription = () => {
    if (!description) return null;

    return description.length > 12
      ? description
          .split(' ')
          .map((i, index) => (index <= 13 ? i : null))
          .join(' ')
          .trim() + '...'
      : description;
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text>{setDescription()}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <Divider width={0.5} orientation="vertical" style={styles.divider} />
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  image: {
    width: '30%',
    height: 100,
    borderRadius: 8,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  wrapper: {
    paddingRight: 7,
    width: '65%',
    justifyContent: 'space-evenly',
  },
  title: {
    marginBottom: 5,
    fontSize: 19,
    fontWeight: '600',
  },

  price: {
    fontWeight: '600',
    marginTop: 5,
  },
  divider: {
    marginHorizontal: 20,
  },
});
