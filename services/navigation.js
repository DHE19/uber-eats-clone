import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Home from '../screens/home.screen';
import RestaurantDetail from '../screens/restaurantDetail.screen';
const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
