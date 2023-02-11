import React from 'react';
import { ScrollView } from 'react-native';

import MenuItem from './menuItem.component';
import { listMenu } from '../../../utils/fakeMenu';

const Menu = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {listMenu.map((i, index) => (
        <MenuItem
          key={index}
          title={i.title}
          image={i.image}
          description={i.description}
          price={i.price}
        />
      ))}
    </ScrollView>
  );
};

export default Menu;
