import React, { forwardRef } from 'react';

import { useNavigate } from 'react-router-dom';
import { Group, Select, Text } from '@mantine/core';

const SelectItem = forwardRef(
  ({ label, description, ...others }, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <div>
          <Text>{description}</Text>
        </div>
      </Group>
    </div>
  )
);

const PokemonName = ({ pokemon, species }) => {
  const nav = useNavigate();
  console.log(pokemon);

  const data = species.varieties.map((v) => {
    let tmp = v.pokemon.name.split('-');
    let description = "";

    if (v.is_default) { description += "Default"; }
    for(let i=1; i<tmp.length; i++) {
      // Mis en majuscule de la première lettre de chaque lettre
      description += tmp[i].charAt(0).toUpperCase() + tmp[i].slice(1) + " ";
    }
    
    return { value: v.pokemon.name, label: species.name, description: description }
  })

  return (
    <Select
      classNames={{
        input: "pokemon_name_input"
      }}
      defaultValue={pokemon.name}
      itemComponent={SelectItem}
      data={ data }
      onChange={(value) => nav(`/pokemon/${value}`)}
      variant="unstyled"
    />
  )
};

export default PokemonName;