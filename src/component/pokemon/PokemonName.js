import React, { forwardRef } from 'react';

import { useNavigate } from 'react-router-dom';
import { Group, Select, Text } from '@mantine/core';
import { capitalize } from '../../services/utils/Capitalize';

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
  let pokeName = "";
  
  let nbDashPlusOne = species.name.split('-').length;
  const data = species.varieties.map((v) => {
    let tmp = v.pokemon.name.split('-');
    let description = "";

    if (v.is_default) { description += "Default"; }
    for(let i=nbDashPlusOne; i<tmp.length; i++) {
      // Mis en majuscule de la première lettre de chaque lettre
      description += capitalize(tmp[i]) + " ";
    }
    
    if (pokemon.name === v.pokemon.name)
      pokeName = v.pokemon.name;

    return { value: v.pokemon.name, label: species.name, description: description }
  })

  return (
    <Select
      classNames={{
        input: "pokemon_name_input"
      }}
      styles={{
        rightSection: { display: 'none' }
      }}
      itemComponent={SelectItem}
      value={pokeName}
      data={ data }
      onChange={(value) => nav(`/pokemon/${value}`)}
      variant="unstyled"
    />
  )
};

export default PokemonName;