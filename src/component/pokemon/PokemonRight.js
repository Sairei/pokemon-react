import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Image, ScrollArea } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { convertEvolsDetailToString } from '../../utils/ConvertEvolsDetailToString';

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
          <ScrollArea offsetScrollbars scrollHideDelay={0} style={{ height: 190 }} >
            {evols.map((value, chain_index) => (
              <div className="evolution" key={value[0].name + "_chain_" + chain_index}>
                {value.map((value, index, elements) => {
                  const evolDetail =
                    <>
                      {value.detail.length > 0 &&
                        <>
                          <FontAwesomeIcon icon={faArrowRight} className='arrow' />
                          {convertEvolsDetailToString(value.detail)}
                          <FontAwesomeIcon icon={faArrowRight} className='arrow' />
                        </>
                      }
                    </>
                  return (
                    <div className="evolution_sub_box" key={value.name}>
                      <div>
                        <div>
                          <div className="evolution_img" style={{ background: `linear-gradient(${colors[0]}, ${colors[1]})` }}>
                            <div className="transparency_div" onClick={() => nav(`/pokemon/${value.name}`)}>
                              <Image
                                alt={value.name}
                                height={80}
                                width={80}
                                src={elements[index][typeImage]}
                                fit="contain"
                                className="evo_img"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="evolution_poke_name">{elements[index].name}</div>
                      </div>

                      {elements[index + 1] && evolDetail}
                    </div>
                  )
                })}
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default PokemonRight;