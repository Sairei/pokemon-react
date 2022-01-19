import React from 'react';

import { Image, ScrollArea } from '@mantine/core';

import { capitalize } from '../../services/utils/Capitalize';

const PokemonGeneral = ({ pokemon, species }) => {
  let genera = "";
  for (let j = 0; j < species.genera.length; j++) {
    if (species.genera[j].language.name === "en") {
      genera = species.genera[j].genus;
      break;
    }
  }
  // Partie générale d'un pokemon
  // https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)
  return (
    <ScrollArea>
      <div className='more_info_general'>
        <div className='presentation info_container_1'>
          <div className='name_genera_id'>
            <div className='name_genera info_container_2'>
              <div className='pokemon_name'>
                {capitalize(pokemon.name)}
              </div>
              <div className='pokemon_genera'>
                {genera}
              </div>
            </div>

            <div className="pokemon_id info_container_2">
              #{String(pokemon.id).padStart(3, '0')}
            </div>
          </div>

          <div className='pokemon_image info_container_2'>
            <Image
              src={pokemon.sprites.other['official-artwork'].front_default}
              height={200}
              fit="contain"
            />
          </div>
        </div>

        <div>

        </div>
      </div>
    </ScrollArea>
  );
};

export default PokemonGeneral;