import React from 'react';

import { Image, Tooltip } from '@mantine/core';

import { capitalize } from '../../../services/utils/Capitalize';
import TypeImage from '../../UI/TypeImage';

const Presentation = ({ pokemon, genera }) => {
  return (
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

        <div className="pokemon_id vertical_align_text info_container_2">
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

      <div className='pokemon_types info_container_2'>
        {pokemon.types.map((type) => {
          return (
            <Tooltip opened={false} key={type.type.name} className='pokemon_more_type' >
              <div className={`poke_type ${type.type.name}`} >
                <TypeImage typeName={type.type.name} />
              </div>
              <div className='vertical_align_text'>
                {type.type.name}
              </div>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

export default Presentation;