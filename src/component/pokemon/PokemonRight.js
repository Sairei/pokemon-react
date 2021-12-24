import React from 'react';

const PokemonRight = ({ pokemon, species }) => {
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
          <div className="desc">
            {description}
          </div>
        </div>

        <div>
          <div className="info_container_headings">Abilities</div>
          <div className="ability_list_bg">
            <ul className="ability_list">
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
          <div className="stats">
            {statistics.map((stat) =>
              <div key={stat['stat__name']} className="stat_columns">
                <div className="stat_columns_name">{stat['stat__name']}</div>
                <div className="stat_columns_val">{stat['stat__val']}</div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="info_container_headings">Evolution</div>
          <div className="evolution__box">

          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonRight;