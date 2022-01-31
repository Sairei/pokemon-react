import React from 'react';

import { capitalize } from '../../../services/utils/Capitalize';

const ThirdPresentation = ({ pokemon, species, growthRate }) => {
  return (
    <div className="presentation info_container_1">
      <div className='other_rate'>
        <div className="info_container_2">
          <div className='little_title'>
            Catch rate
          </div>
          <div className='other_rate_text'>
            {
              `${species.capture_rate} (${Number((species.capture_rate * 100) / 255).toFixed(2)}%)`
            }
          </div>
        </div>
        <div className="info_container_2">
          <div className='little_title'>
            Base friendship
          </div>
          <div className='other_rate_text'>
            {
              `${species.base_happiness} (${Number((species.base_happiness * 100) / 255).toFixed(2)}%)`
            }
          </div>
        </div>
      </div>

      <div className="sub_container breeding">
        <div className='info_container_2'>
          <div className='little_title'>
            Egg groups
          </div>
          <div className='breeding_text'>
            {
              species.egg_groups &&
              species.egg_groups.map((elt, index) => {
                let res = "";
                if (index > 0) {
                  res += " and ";
                }
                return res + capitalize(elt.name);
              })
            }
          </div>
        </div>
        <div className='info_container_2'>
          <div className='little_title'>
            Hatch time
          </div>
          <div className='breeding_text'>
            {
              `${(species.hatch_counter + 1) * 255} steps`
            }
          </div>
        </div>
      </div>

      <div className="sub_container info_container_2">
        <div className='little_title'>
          Base experience
        </div>
        <div className='other_rate_text'>
          {
            `${pokemon.base_experience} exp`
          }
        </div>
      </div>

      <div className="sub_container info_container_2">
        <div className='little_title'>
          Leveling rate
        </div>
        <div className='other_rate_text'>
          {
            growthRate &&
            `${growthRate.name}`
          }
          <br/>
          {
            growthRate &&
            `${growthRate.formula}`
          }
        </div>
      </div>
    </div>
  );
};

export default ThirdPresentation;