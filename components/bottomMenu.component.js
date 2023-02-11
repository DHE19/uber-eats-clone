import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const BottomMenu = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
      }}>
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
};

export default BottomMenu;

const Icon = ({ icon, text }) => (
  <TouchableOpacity activeOpacity={0.55}>
    <View>
      <FontAwesome5 name={icon} size={25} style={{ marginBottom: 3, alignSelf: 'center' }} />
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);
