import React from 'react';

const PokemonStatAndEffectiveness = () => {
  // Stats
  // https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)#Stats
  // Efficasité desattaques contre lui
  // https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)#Type_effectiveness
  return (
    <>
      <div className='more_info_stats'>
        <div className="info_container_headings">Stats</div>
      </div>
      <div className='more_info_effectiveness'>
        <div className="info_container_headings">Effectiveness</div>
      </div>
    </>
  );
};

export default PokemonStatAndEffectiveness;