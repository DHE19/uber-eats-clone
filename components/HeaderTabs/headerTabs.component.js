import React, { useState } from 'react';
import { View } from 'react-native';

import HeaderButton from './headerbutton.component';

const tabs = [
  {
    id: 'all_one',
    name: 'All',
  },
  {
    id: 'delivery_two',
    name: 'Delivery',
  },
  {
    id: 'pickup_three',
    name: 'Pickup',
  },
];
const HeaderTabs = ({ activeTab, setActiveTab }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'center',
      }}>
      {tabs.map((t) => (
        <HeaderButton
          key={t.id}
          text={t.name}
          btnColor={`${activeTab === t.name ? 'black' : 'white'}`}
          color={`${activeTab === t.name ? 'white' : 'black'}`}
          setActiveTab={setActiveTab}
        />
      ))}
    </View>
  );
};

export default HeaderTabs;
