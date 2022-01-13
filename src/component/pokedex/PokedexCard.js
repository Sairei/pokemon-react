import React, { useEffect, useState } from "react";

import { Image, Tooltip } from "@mantine/core";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import TypeImage from "../UI/TypeImage";
import { colorTypeGradients } from "../../services/utils/ColorTypeUtils";
import { convertSpeciesToName } from "../../services/utils/ConvertSpeciesToName";
import { findImage, findShiny } from "../../services/utils/FindImage";

const PokedexCard = (props) => {
  const nav = useNavigate();
  const isShiny = useSelector((state) => state.wantShiny);
  const [image, setImage] = useState("");

  const pokemon = props.pokemon;
  useEffect(() => {
    if (pokemon) {
      if (isShiny)
        setImage(findShiny(pokemon));
      else
        setImage(findImage(pokemon));
    }
  }, [pokemon, isShiny])

  if(undefined === pokemon) {
    return (<></>)
  }


  const nbType = pokemon.types.length; 
  const type_1 = pokemon.types[0].type.name;
  const type_2 = pokemon.types[nbType - 1].type.name;
  const colors = colorTypeGradients(type_1, type_2, nbType);

  var namePokemon = convertSpeciesToName(pokemon.name, pokemon.species.name);

  return (
    <div className="pokedexCard_container" style={{ background: `linear-gradient(160deg, ${colors[0]}, 45%, ${colors[1]}), 45%` }} >
      <div className="pokedexCard_header">
        #{ String(pokemon.id).padStart(3, '0') }
      </div>

      <div className="pokedexCard_image" onClick={() => nav(`/pokemon/${pokemon.name}`)}>
        <Image 
          src={image} 
          height={130}
          width={200}
          fit="contain"
        />
      </div>

      <div className="pokedexCard_footer">
        <h3> { namePokemon } </h3>
        <div className="poke_types">
          { pokemon.types.map((type) => {
            return (
              <Tooltip key={ type.type.name } label={ type.type.name } >
                <div className={`poke_type ${type.type.name}`} >
                  <TypeImage typeName={type.type.name} />
                </div>
              </Tooltip>
            );
          }) }
        </div>
      </div>
    </div>
  );
}

export default PokedexCard;