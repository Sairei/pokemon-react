import React, { useEffect, useState } from 'react';

import { Container, ScrollArea } from '@mantine/core';
import { useParams } from 'react-router-dom';

import { getPokemonData } from '../../services/scripts/pokemon/getPokemonData';
import { colorTypeGradients } from '../../services/utils/ColorTypeUtils';
import PokemonLeft from './PokemonLeft';
import PokemonRight from './PokemonRight';
import Loading from '../UI/Loading';
import NotFound from '../UI/NotFound';

const PokemonPage = () => {

  const [error, setIsError] = useState(false);

  const [pokemon, setPokemon] = useState();
  const [species, setSpecies] = useState();
  const [evols, setEvols] = useState();
  const [colors, setColor] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    let isMount = true;

    async function fetchData() {
      await getPokemonData(id)
        .then(({ pokemon, species, evols }) => {
          if (pokemon === null) {
            setIsError(true);
            setIsLoading(false);
          }
          else {
            if (isMount) {
              setIsError(false);

              setPokemon(pokemon);
              setSpecies(species);
              setEvols(evols);

              const nbType = pokemon.types.length;
              const type_1 = pokemon.types[0].type.name;
              const type_2 = pokemon.types[nbType - 1].type.name;
              setColor(colorTypeGradients(type_1, type_2, nbType));
              setIsLoading(false);
            }
          }
        });
    }

    fetchData()

    return () => { isMount = false };
  }, [id])

  if (isLoading) {
    return (<Loading />);
  }

  if (error) {
    return (<NotFound what="Pokemon" name={id} />);
  }

  return (
    <div className='pokemon_container'>
      <Container className='info_pokemon_container' size="xs" style={{ background: `linear-gradient(160deg, ${colors[0]}, 45%, ${colors[1]}), 45%`, maxWidth: "80%" }} >
        <ScrollArea offsetScrollbars scrollHideDelay={0} >
          <div className="info_pokemon">
            <PokemonLeft
              pokemon={pokemon}
              species={species}
              colors={colors}
            />

            <PokemonRight
              pokemon={pokemon}
              species={species}
              colors={colors}
              evols={evols}
            />
          </div>
        </ScrollArea>
      </Container>
    </div >
  );
};

export default PokemonPage;