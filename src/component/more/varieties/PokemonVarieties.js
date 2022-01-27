import React from 'react';

import { Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const PokemonVarieties = ({ varieties }) => {
  const nav = useNavigate()

  return (
    <div className='more_info_varieties'>
      <div className="info_container_headings">Varieties</div>

      <div className='all_varieties'>
        {
          varieties &&
          varieties.map((v) => {
            return (
              <div key={v.name} className='varietie' >
                <Image
                  onClick={() => nav(v.link)}
                  src={v.image}
                  height={250}
                  width={250}
                  fit="contain"
                />
                {v.name}
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default PokemonVarieties;