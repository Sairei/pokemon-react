import React from 'react';

import { ScrollArea } from '@mantine/core';

import TableAllName from './TableAllName';
import Presentation from './Presentation';
import SecondPresentation from './SecondPresentation';
import ThirdPresentation from './ThirdPresentation';

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
        <Presentation
          pokemon={pokemon} genera={genera}
        />

        <TableAllName
          names={species.names} 
        />

        <SecondPresentation
          pokemon={pokemon} species={species}
        />

        <ThirdPresentation
          pokemon={pokemon} species={species}
        />
      </div>
    </ScrollArea>
  );
};

export default PokemonGeneral;