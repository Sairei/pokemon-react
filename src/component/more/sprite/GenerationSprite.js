import React from 'react';

import GameSprite from './GameSprite';

const GenerationSprite = ({ games }) => {
  let unavailable = false;

  const arr = Object.entries(games).map((values) => {
    if (!values[1]['front_default']) {
      unavailable = true;
    }

    return (
      <GameSprite key={values[0]} games={values[0]} sprites={values[1]} />
    );
  });


  if (unavailable) {
    return (
      <div>
        This Pokémon was unavailable for this generation...
      </div>
    );
  }

  return (
    <>
      {arr}
    </>
  );
};

export default GenerationSprite;