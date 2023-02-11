import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Platform, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';

import HeaderTabs from '../components/HeaderTabs/headerTabs.component';
import Restarants from '../components/Restaurants/restaurant.component';
import BottomMenu from '../components/bottomMenu.component';
import Categories from '../components/categories.component';
import SearchBar from '../components/searchBar.component';
import { restaurantList } from '../utils/fakeData';
import { YELP_API_KEY, yelpQuery } from '../utils/yelp';

const Home = ({ navigation }) => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [city, setCity] = useState('MexicoCity');
  const [activeTab, setActiveTab] = useState('All');

  const getRestaurants = async () => {
    const yelpURL = yelpQuery(city);
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpURL, apiOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.businesses);
        setRestaurantData(
          activeTab !== 'All'
            ? json.businesses.filter((b) => b.transactions.includes(activeTab.toLowerCase()))
            : json.businesses
        );
      });
  };

  React.useEffect(() => {
    getRestaurants();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <HeaderTabs setActiveTab={setActiveTab} activeTab={activeTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <Restarants restaurantList={restaurantData ?? restaurantList} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomMenu />
      </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: 'white',
    padding: 15,
  },
  container: {
    marginTop: Platform.OS === 'android' ? 32 : 0,
    backgroundColor: '#eee',
    flex: 1,
  },
});
