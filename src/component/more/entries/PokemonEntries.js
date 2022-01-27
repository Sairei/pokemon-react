import { Table } from '@mantine/core';
import React from 'react';

import Entrie from './Entrie';

const PokemonEntries = ({ species }) => {
  // Entrées dans le pokedex
  // https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)#Pok.C3.A9dex_entries_2

  const listEntries = species.flavor_text_entries.filter((e) => {
    return e.language.name === "en";
  })
  
  return (
    <div className='more_info_entrie'>
      <div className="info_container_headings">Entries</div>

      <Table>
        <tbody>
          {
            listEntries.map((entrie, index) => {
              let precText = index===0 ? "" : listEntries[index-1].flavor_text;
              let writeText = !(precText === entrie.flavor_text);
              let nbRow = 1;
              while(((index + nbRow) < listEntries.length) && (listEntries[index + nbRow].flavor_text === entrie.flavor_text)) {
                nbRow++;
              }

              return (
                <Entrie key={`entrie_${index}`} entrie={entrie} writeText={writeText} nbRow={nbRow} />
              );
            })
          }
        </tbody>
      </Table>
    </div>
  );
};

export default PokemonEntries;