import React, { useEffect, useState } from 'react';

import { Container } from '@mantine/core';
import { useParams } from 'react-router-dom';

import { getPokemonData } from '../../services/scripts/pokemon/getPokemonData';
import PokemonLeft from './PokemonLeft';
import PokemonRight from './PokemonRight';

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState();
  const [species, setSpecies] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      await getPokemonData(id)
        .then(({ pokemon, species }) => {
          setPokemon(pokemon);
          setSpecies(species);
        });
    }

    fetchData()
  }, [])

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