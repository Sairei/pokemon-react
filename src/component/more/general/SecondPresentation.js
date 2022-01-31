import React from 'react';

import { Progress } from '@mantine/core';

import { genderMaleRateCalculated } from '../../../services/utils/GenderRate';
import { capitalize } from '../../../services/utils/Capitalize';

const SecondPresentation = ({ pokemon, species }) => {
  let whatIs = "Normal pokemon"
  if (species.is_baby) { whatIs = "Baby pokemon" }
  if (species.is_legendary) { whatIs = "Legendary pokemon" }
  if (species.is_mythical) { whatIs = "Mythical pokemon" }

  let genderRate = <>Genderless</>
  if (species.gender_rate !== -1) {
    const genderRatioMale = genderMaleRateCalculated(species.gender_rate);
    const genderRatioFemale = 100 - genderRatioMale;
    genderRate =
      <Progress
        size="xl"
        sections={[
          { value: genderRatioMale, color: 'blue', label: `${genderRatioMale}%` },
          { value: genderRatioFemale, color: 'pink', label: `${genderRatioFemale}%` },
        ]}
      />
  }

  return (
    <div className="presentation info_container_1">
      <div className="info_container_2">
        <div className='what_is_pokemon'>
          {whatIs}
        </div>
      </div>

      <div className="sub_container info_container_2">
        <div className='little_title'>
          Gender ratio
        </div>
        <div className='genderRate_text'>
          {genderRate}
        </div>
      </div>

      <div className="abilities_container sub_container info_container_2">
        <div className='little_title'>
          Abilities
        </div>
        <div className='abilities_list'>
          <ul className='ability_list'>
            {pokemon.abilities.map((ability) =>
              <li key={ability.ability.name} className='vertical_align_text'>
                <div>{capitalize(ability.ability.name)}</div>
                {
                  ability.is_hidden &&
                  <div className='hidden_ability'>Hidden ability</div>
                }
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className='sub_container height_weight'>
        <div className="info_container_2">
          <div className='little_title'>
            Height
          </div>
          <div className='height_weight_text'>
            {
              `${pokemon.height / 10} m`
            }
            <br/>
            {
              `${`${Math.floor(pokemon.height / 10 * 3.28)}'${Math.round(((pokemon.height / 10 * 3.28) % 1) * 12)}"`} `
            }
          </div>
        </div>
        <div className="info_container_2">
          <div className='little_title'>
            Weight
          </div>
          <div className='height_weight_text'>
            {
              `${(pokemon.weight / 10).toFixed(1)} kg`
            }
            <br/>
            {
              `${(pokemon.weight * 0.2205).toFixed(1)} lbs`
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPresentation;