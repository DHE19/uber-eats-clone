import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';

import Menu from '../components/RestaurantDetail/Menu/menu.component';
import About from '../components/RestaurantDetail/about.component';

const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params;
  const { name, image_url: image } = restaurant;
  return (
    <View>
      <About name={name} image={image} description={createDescription(restaurant)} />
      <Divider width={1.8} style={{ marginVertical: 15 }} />
      <Menu />
    </View>
  );
};

export default RestaurantDetail;

const createDescription = ({ categories, display_phone, review_count, rating, price }) => {
  const categorias = categories.map(i => i.title).join(', ');
  console.log(categorias);
  return `${categorias}  •  ${price ?? '$$'}  •  ${rating} ⭐️ (${review_count})`;
};
