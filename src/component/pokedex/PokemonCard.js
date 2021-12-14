import React from "react";

import { Image } from "@mantine/core";

const PokemonCard = (props) => {
  const pokemon = props.pokemon;
  
  if(undefined === pokemon) {
    return (<></>)
  }

  return (
    <div className="pokedexCard_container">
      <div className="pokedexCard_header">
        #{ String(pokemon.id).padStart(3, '0') }
      </div>

      <div className="pokedexCard_image">
        <Image 
          src={ pokemon.sprites.other.dream_world.front_default 
            ? pokemon.sprites.other.dream_world.front_default 
            : pokemon.sprites.other['official-artwork'].front_default } 
          height="150px"
        />
      </div>

      <div className="pokedexCard_footer">
        <h3> { pokemon.name } </h3>
        <div className="poke_types">

        </div>
      </div>
    </div>
  );
}

export default PokemonCard;