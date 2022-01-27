import React from 'react';

import { Image } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { convertEvolsDetailToString } from '../../../services/utils/ConvertEvolsDetailToString';

const PokemonMoreEvolution = ({ nav, evols, colors, typeImage }) => {
  return (
    <div className='more_info_evolution'>
      <div className="info_container_headings">Evolution</div>
      <div className='evolutions_container'>
        {evols.map((chain, chain_index) => (
          <div className="evolution" key={chain[0].name + "_chain_" + chain_index}>
            {chain.map((evo, index, elements) => {
              const evolDetail =
                <>
                  {evo.detail.length > 0 &&
                    <>
                      <FontAwesomeIcon icon={faArrowRight} className='arrow' />
                      {convertEvolsDetailToString(evo.detail)}
                      <FontAwesomeIcon icon={faArrowRight} className='arrow' />
                    </>
                  }
                </>
              const link = evo.link ? evo.link : evo.name;
              return (
                <div className="evolution_sub_box" key={evo.name}>
                  <div>
                    <div>
                      <div className="evolution_img" style={{ background: `linear-gradient(${colors[0]}, ${colors[1]})` }}>
                        <div className="transparency_div" onClick={() => nav(`/pokemon/${link}`)}>
                          <Image
                            alt={evo.name}
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
      </div>
    </div>
  );
};

export default PokemonMoreEvolution;