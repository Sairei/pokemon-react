import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { getPokemonData } from '../../services/scripts/pokemon/getPokemonData';
import { colorTypeGradients } from '../../services/utils/ColorTypeUtils';
import PokemonGeneral from './general/PokemonGeneral';
import PokemonEntries from './entries/PokemonEntries';
import PokemonLocation from './location/PokemonLocation';
import PokemonStatAndEffectiveness from './PokemonStatAndEffectiveness';
import PokemonLearningSet from './PokemonLearningSet';
import PokemonMoreEvolution from './evolution/PokemonMoreEvolution';
import PokemonSprite from './sprite/PokemonSprite';
import PokemonVarieties from './varieties/PokemonVarieties';
import Loading from '../UI/Loading';
import NotFound from '../UI/NotFound';
import { getAllVarieties } from '../../services/scripts/pokemon/getVarieties';
import { getGrowthRate } from '../../services/scripts/growth/getGrowthRate';
import { getPokemonLocation } from '../../services/scripts/pokemon/getPokemonLocation';

const PokemonMore = () => {
  const nav = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(false);

  const [pokemon, setPokemon] = useState();
  const [species, setSpecies] = useState();
  const [evols, setEvols] = useState();
  const [colors, setColor] = useState();
  const [locations, setLocations] = useState();
  const [varieties, setVarieties] = useState();
  const [growthRate, setGrowthRate] = useState();

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

      await getPokemonLocation(id)
        .then(({ location }) => {
          if (location === null) {
            setIsError(true);
            setIsLoading(false);
          }
          else {
            if (isMount) {
              setIsError(false);

              setLocations(location);

              setIsLoading(false);
            }
          }
        });
    }

    fetchData()

    return () => { isMount = false };
  }, [id])

  useEffect(() => {
    async function fetchData() {
      if (species) {
        await getAllVarieties(species)
          .then(({ varieties }) => {
            setVarieties(varieties);
          });

        await getGrowthRate(species.growth_rate.name)
          .then(({ growthRate }) => {
            setGrowthRate(growthRate);
          });
      }
    }

    fetchData()
  }, [species])


  if (isLoading) {
    return (<Loading />);
  }

  if (error) {
    return (<NotFound what="Pokemon" name={id} />);
  }

  const style = `
    .more_info_container > * {
      border: 7px ${colors[0]} solid;
      background-color: ${colors[0]}70;
    }
    .info_container_2 {
      background-color: ${colors[0]}35;
    }
  `;
  return (
    <div className='more_info_container'>
      <style>
        {style}
      </style>

      <PokemonGeneral
        pokemon={pokemon} species={species} growthRate={growthRate}
      />

      <PokemonEntries
        species={species}
      />

      <PokemonLocation
        locations={locations}
      />

      <PokemonStatAndEffectiveness
        pokemon={pokemon} species={species}
      />

      <PokemonLearningSet
        pokemon={pokemon} species={species}
      />

      <PokemonMoreEvolution
        nav={nav} evols={evols}
        colors={colors} typeImage="image"
      />

      <PokemonSprite
        pokemon={pokemon}
      />

      <PokemonVarieties
        varieties={varieties}
      />
    </div>
  );
};

export default PokemonMore;