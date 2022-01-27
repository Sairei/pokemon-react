import { Image } from '@mantine/core';
import React from 'react';

const Sprite = ({ img }) => {
  return (
    <Image 
      src={img} 
      height={100}
      width={100}
      fit="contain"
    />
  );
};

export default Sprite;