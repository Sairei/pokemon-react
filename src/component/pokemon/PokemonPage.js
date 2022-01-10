import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Container, ScrollArea } from '@mantine/core';
import { useParams } from 'react-router-dom';

import { changeFil } from '../../router/provider/Dispatcher';
import { getPokemonData } from '../../services/scripts/pokemon/getPokemonData';
import { colorTypeGradients } from '../../services/utils/ColorTypeUtils';
import PokemonLeft from './PokemonLeft';
import PokemonRight from './PokemonRight';
import PokemonNotFound from './PokemonNotFound';
import Loading from '../items/Loading';

const PokemonPage = () => {
  const dispatch = useDispatch();
  const filAriane = useSelector((state) => state.filAriane);

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
  
  useEffect(() => {
    if (pokemon) {
      const pokemonLink = {
        name: pokemon.name ,
        link: `/pokemon/${pokemon.name}`
      }

      // Récuperation du lien vers le pokedex
      let newFil = [filAriane[0]];
      newFil.push(pokemonLink);
      dispatch(changeFil(newFil));
    }
  }, 
    // eslint-disable-next-line
    [pokemon]);

  if (isLoading) {
    return (<Loading />);
  }

  if (error) {
    return (<PokemonNotFound pokemonName={id} />);
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