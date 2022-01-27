import React from 'react';

import { Image } from '@mantine/core';

const HomeSprite = ({ pokemon }) => {
  const homeSprite = pokemon.sprites.other.home;
  return (
    <>
      {
        (homeSprite["front_default"] || homeSprite["front_shiny"]) &&
        <div className='home_sprite info_container_1'>
          <div className='info_container_2'>
            <div style={{ backgroundColor: "#11BB11" }} className="title" >
              Home
            </div>

            <div className="sprites">
              <div>
                <Image
                  src={homeSprite["front_default"]}
                  width={300} />
                Default
              </div>

              <div>
                <Image
                  src={homeSprite["front_shiny"]}
                  width={300} />
                Shiny
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default HomeSprite;