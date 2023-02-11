import React from 'react';
import { View } from 'react-native';

import RestaurantItem from './restaurantItem.component';

const Restarants = ({ restaurantList, navigation }) => {
  return (
    <View>
      {restaurantList.map((item) => (
        <RestaurantItem navigation={navigation} key={item.id + item.name} restaurant={item} />
      ))}
    </View>
  );
};

export default Restarants;
