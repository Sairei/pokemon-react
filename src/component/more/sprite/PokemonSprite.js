import React from 'react';

import { ScrollArea, Tabs } from '@mantine/core';

import GenerationSprite from './GenerationSprite';
import { convertGenToColor } from '../../../services/utils/ColorGenerationUtil';

const PokemonSprite = ({ pokemon }) => {
  // Sprite suivant les génération
  // https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)#Sprites
  const tabs = Object.entries(pokemon.sprites.versions).map((values) => {
    let gen = values[0];
    let games = values[1];
    let color = convertGenToColor(gen);
    console.log(color);
    return (
      <Tabs.Tab key={gen} label={gen} color={color}>
        <GenerationSprite games={games} />
      </Tabs.Tab >
    );
  })

  return (
    <div className='more_info_sprites'>
      <div className="info_container_headings">Sprites</div>

      <ScrollArea>
        <div className="info_container_1">
          <Tabs
            classNames={{
              tabsList: 'tabs_list_sprites',
              body: "generation_container",
            }}
            grow variant="outline"
          >
            {tabs}
          </Tabs>
        </div>

      </ScrollArea>
    </div>
  );
};

export default PokemonSprite;