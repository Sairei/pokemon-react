import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PokemonEvolution from './PokemonEvolution';

const PokemonRight = ({ pokemon, species, colors, evols }) => {
  const nav = useNavigate();
  const isShiny = useSelector((state) => state.wantShiny);

  const [typeImage, setTypeImage] = useState("");
  useEffect(() => {
    if (isShiny)
      setTypeImage("shiny");
    else
      setTypeImage("image");
  }, [isShiny])

  let description = "";
  for (let j = 0; j < species.flavor_text_entries.length; j++) {
    if (species.flavor_text_entries[j].language.name === "en") {
      description = species.flavor_text_entries[j].flavor_text;
      break;
    }
  }

  let abilities = [];
  for (let i = 0; i < pokemon.abilities.length; i++) {
    abilities.push(pokemon.abilities[i].ability.name);
  }

  let statistics = [];
  for (let j = 0; j < pokemon.stats.length; j++) {
    const Obj = {};
    Obj['stat__name'] = pokemon.stats[j].stat.name;
    Obj['stat__val'] = pokemon.stats[j].base_stat;
    statistics.push(Obj);
  }

  return (
    <div className="info_right_container">
      <div className="right_box">
        <div>
          <div className="info_container_headings">About</div>
          <div className="pokemon_desc">
            {description}
          </div>
        </div>

        <div>
          <div className="info_container_headings">Abilities</div>
          <div className="pokemon_ability_list_bg">
            <ul className="pokemon_ability_list">
              {abilities.map((ability) =>
                <li key={ability}>
                  <div className="ability">{ability}&nbsp;</div>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div>
          <div className="info_container_headings">Base Stats</div>
          <div className="pokemon_stats">
            {statistics.map((stat) =>
              <div key={stat['stat__name']} className="stat_columns">
                <div className="stat_columns_name">{stat['stat__name']}</div>
                <div className="stat_columns_val">{stat['stat__val']}</div>
              </div>
            )}
          </div>
        </div>

        <PokemonEvolution
          nav={nav} evols={evols}
          colors={colors} typeImage={typeImage} />

        <div>
          <Link className="info_container_headings" to="/" >More...</Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonRight;