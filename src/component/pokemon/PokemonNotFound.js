import React from 'react';

import { Image } from '@mantine/core';

import pokeball from '../../assets/images/pokeball.png'

const PokemonNotFound = ({ pokemonName }) => {
  return (
    <div className='pokemon_not_found'>
      <div className='code_404'>
        4
        <Image
          className='img'
          height={250}
          width={250}
          src={pokeball} />
        4
      </div>
      
      <div>
        Pokemon "{pokemonName}" not found
      </div>
    </div>
  );
};

export default PokemonNotFound;