import React, { useEffect, useState } from 'react';

import { Image, Tooltip } from '@mantine/core';

import { convertSpeciesToName } from '../../utils/ConvertSpeciesToName';
import { genderRate } from '../../utils/GenderRate';
import { findImage, findShiny } from '../../utils/FindImage';
import { useSelector } from 'react-redux';

const PokemonLeft = ({ pokemon, species, colors }) => {
  const isShiny = useSelector((state) => state.wantShiny);

  const [image, setImage] = useState("");
  useEffect(() => {
    if (isShiny)
      setImage(findShiny(pokemon));
    else
      setImage(findImage(pokemon));
  }, [pokemon, isShiny])

  let genera = "";
  for (let j = 0; j < species.genera.length; j++) {
    if (species.genera[j].language.name === "en") {
      genera = species.genera[j].genus;
      break;
    }
  }

  return (
    <div className="info_left_container">
      <div className="pokemon_id">
        #{String(pokemon.id).padStart(3, '0')}
      </div>

      <div className="pokemon_name">
        {convertSpeciesToName(pokemon.name, species.name)}
      </div>

      <div className="pokemon_genera" style={{ background: colors[0] }}>
        {genera}
      </div>

      <div>
        <Image
          src={image}
          height={130}
          width={200}
          fit="contain"
        />
      </div>

      <div className="poke_types">
        {pokemon.types.map((type) => {
          return (
            <Tooltip key={type.type.name} label={type.type.name} >
              <div className={`poke_type ${type.type.name}`} >
                <Image src={require(`../../assets/images/type/${type.type.name}.png`)} alt={type.type.name} />
              </div>
            </Tooltip>
          );
        })}
      </div>

      <div className="pokemon_dimensions">
        <p>
          <span style={{ fontSize: "20px" }}>Height </span>
          {`${pokemon.height / 10} m/${`${Math.floor(pokemon.height / 10 * 3.28)}'${Math.round(((pokemon.height / 10 * 3.28) % 1) * 12)}"`} `}
        </p>
        <p>
          <span style={{ fontSize: "20px" }}>Weight </span>
          {`${(pokemon.weight / 10).toFixed(1)} kg/${(pokemon.weight * 0.2205).toFixed(1)} lbs`}
        </p>
      </div>

      <div className="gender__container">
        {species.gender_rate === -1 ? "Genderless" : genderRate(species.gender_rate)}
      </div>
    </div>
  );
};

export default PokemonLeft;