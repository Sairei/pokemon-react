import React from 'react';

import { Progress } from '@mantine/core';

import { genderMaleRateCalculated } from '../../../services/utils/GenderRate';

const SecondPresentation = ({ pokemon, species }) => {
  let genderRate = <>Genderless</>
  console.log(species.gender_rate);
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
    <div className="presentation_2 info_container_1">
      <div className="info_container_2">
        <div className='little_title'>
          Gender ratio
        </div>
        <div className='genderRate_text'>
          {genderRate}
        </div>
      </div>

      <div className="sub_container info_container_2">
        <div>
          Abilities
        </div>
      </div>

      <div className="sub_container info_container_2">
        <div>
          Breeding
        </div>
      </div>

      <div className="sub_container info_container_2">
        <div>
          Abilities
        </div>
      </div>
    </div>
  );
};

export default SecondPresentation;