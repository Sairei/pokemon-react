import React, { useEffect, useState } from 'react';

import { Container } from '@mantine/core';
import { useParams } from 'react-router-dom';

import { getPokemonData } from '../../services/scripts/pokemon/getPokemonData';
import { colorTypeGradients } from '../../utils/ColorTypeUtils';
import PokemonLeft from './PokemonLeft';
import PokemonRight from './PokemonRight';
import Loading from '../items/Loading';

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState();
  const [species, setSpecies] = useState();
  const [colors, setColor] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      await getPokemonData(id)
        .then(({ pokemon, species }) => {
          setPokemon(pokemon);
          setSpecies(species);

          const nbType = pokemon.types.length; 
          const type_1 = pokemon.types[0].type.name;
          const type_2 = pokemon.types[nbType - 1].type.name;
          setColor( colorTypeGradients(type_1, type_2, nbType) );
          setIsLoading(false);
        });
    }

    fetchData()
  }, [id])

  if (isLoading) {
    return (<Loading />)
  }

  return (
    <Container className='info_container' size="xs" style={{ background: `linear-gradient(160deg, ${colors[0]}, 45%, ${colors[1]}), 45%` }} >
      <div className="info_pokemon">
        <PokemonLeft 
          pokemon={ pokemon }
          species={ species }
          colors={ colors }
        />

        <PokemonRight 
          pokemon={ pokemon }
          species={ species }
        />
      </div>
    </Container>
  );
};

export default PokemonPage;