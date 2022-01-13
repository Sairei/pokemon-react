import React from 'react';

import { Image, ScrollArea } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { convertEvolsDetailToString } from '../../../services/utils/ConvertEvolsDetailToString';

const PokemonEvolution = ({ nav, evols, colors, typeImage }) => {
  return (
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
  );
};

export default PokemonEvolution;