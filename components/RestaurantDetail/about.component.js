import React from 'react';

import RestaurantItemDetail from './restaurantItemDetail.component';

const mockupImage = 'https://http2.mlstatic.com/D_NQ_NP_2X_847572-MLM52689159780_122022-F.webp';
const title = 'Farmhouse Kitchen Thai Cuisine';
const descriptionMock = 'Thai  Comfort';

const About = ({ name, image, description }) => {
  return (
    <>
      <RestaurantItemDetail
        imgPath={image ?? mockupImage}
        title={name ?? title}
        description={description ?? descriptionMock} 
      />
    </>
  );
};

export default About;
