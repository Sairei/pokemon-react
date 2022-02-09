import React from 'react';
import Loading from '../../UI/Loading';
import Location from './Location';

const PokemonLocation = ({ locations }) => {
  // Localisation du pokemon
  // https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)#Game_locations

  if(!locations) {
    return <Loading />
  }

  const locs = locations.map((l) => {
    console.log(l);
    return <Location key={l.location.id} location={l} />;
  })

  return (
    <div className='more_info_location'>
      <div className="info_container_headings">Location</div>
      {locs}
    </div>
  );
};

export default PokemonLocation;