import React from 'react';

import GameSprite from './GameSprite';

const GenerationSprite = ({ games }) => {
  return (
    Object.entries(games).map((values) => {
      return (
        <GameSprite games={values[0]} sprites={values[1]} />
      );  
    })
  );
};

export default GenerationSprite;