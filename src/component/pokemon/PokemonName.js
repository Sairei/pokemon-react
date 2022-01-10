import React from 'react';

import { NativeSelect } from '@mantine/core';

import { convertSpeciesToName } from '../../services/utils/ConvertSpeciesToName';

const PokemonName = ({ pokemon, species }) => {
  if (species.varieties.lenght === 1) {
    return (
      <>
        { convertSpeciesToName(pokemon.name, species.name) }
      </>
    )
  } 

  const data = species.varieties.map((v) => {
    return { value: v.pokemon.name, label: v.pokemon.name }
  })
  return (
    <NativeSelect
      classNames={{
        input: "pokemon_name_input"
      }}
      styles={{
        rightSection: { display: 'none' }
      }}
      data={ data }
      variant="unstyled"
    />
  )
};

export default PokemonName;