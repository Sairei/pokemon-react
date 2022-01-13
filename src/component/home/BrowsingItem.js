import { Title } from '@mantine/core';
import React from 'react';

const BrowsingItem = (props) => {
  const title = props.title;
    
  return (
    <div className='browsing_item'>
      <Title order={2} >
        {title}
      </Title>
    </div>
  );
};

export default BrowsingItem;