import { Table } from '@mantine/core';
import React from 'react';

import Entrie from './Entrie';

const PokemonEntries = ({ species }) => {
  // Entrées dans le pokedex
  // https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)#Pok.C3.A9dex_entries_2

  const listEntries = species.flavor_text_entries.filter((e) => {
    return e.language.name === "en";
  })
  console.log(listEntries);
  return (
    <div className='more_info_entrie'>
      <div className="info_container_headings">Entries</div>

      <Table>
        <tbody>
          {
            listEntries.map((entrie, index) => {
              return (
                <Entrie key={`entrie_${index}`} entrie={entrie} />
              );
            })
          }
        </tbody>
      </Table>
    </div>
  );
};

export default PokemonEntries;