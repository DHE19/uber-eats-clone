import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const HeaderButton = ({ text, btnColor = 'black', color = 'white', activeTab, setActiveTab }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: btnColor,
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => setActiveTab(text)}>
      <Text style={{ color, fontSize: 15, fontWeight: '900' }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default HeaderButton;
