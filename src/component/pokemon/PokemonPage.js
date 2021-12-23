import React from 'react';

import { Container } from '@mantine/core';
import { useParams } from 'react-router-dom';

import PokemonLeft from './PokemonLeft';
import PokemonRight from './PokemonRight';

const PokemonPage = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <Container className='info_container' size="xs" >
      <div className="info_pokemon">
        <PokemonLeft />

        <PokemonRight />
      </div>
    </Container>
  );
};

export default PokemonPage;