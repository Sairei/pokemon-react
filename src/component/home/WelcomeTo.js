import React from 'react';

import { Title } from '@mantine/core';

const WelcomeTo = () => {
  return (
    <div className='welcome_container'>
      <Title order={1}>
        Welcome to PokePoke
      </Title>
      <p>
        PokePoke is a website about Pokémon. 
        <br/>
        Since 2021, it has grouwn to become the site we have today, but it's not a community site.
        <br/>
        This is a site with data filled automatically thanks the <a href="https://pokeapi.co/">pokeAPI</a> and it was made for fun.
      </p>
    </div>
  );
};

export default WelcomeTo;