import React from "react";

import { Image } from "@mantine/core";
import { colorTypeGradients } from "../../utils/ColorTypeUtils";

const PokemonCard = (props) => {
  const pokemon = props.pokemon;
  
  if(undefined === pokemon) {
    return (<></>)
  }

  const nbType = pokemon.types.length; 
  const type_1 = pokemon.types[0].type.name;
  const type_2 = pokemon.types[nbType - 1].type.name;
  const colors = colorTypeGradients(type_1, type_2, nbType);

  return (
    <div className="pokedexCard_container" style={{ background: `linear-gradient(160deg, ${colors[0]}, 45%, ${colors[1]}), 45%` }} >
      <div className="pokedexCard_header">
        #{ String(pokemon.id).padStart(3, '0') }
      </div>

      <div className="pokedexCard_image">
        <Image 
          src={ pokemon.sprites.other.dream_world.front_default 
            ? pokemon.sprites.other.dream_world.front_default 
            : pokemon.sprites.other['official-artwork'].front_default } 
          height={130}
          width={200}
          fit="contain"
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