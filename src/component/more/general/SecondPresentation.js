import React from 'react';

import { Progress } from '@mantine/core';

import { genderMaleRateCalculated } from '../../../services/utils/GenderRate';

const SecondPresentation = ({ pokemon, species }) => {
  const genderRatioMale = genderMaleRateCalculated(species.gender_rate);
  const genderRatioFemale = 100 - genderRatioMale;

  return (
    <div className="info_container_1">
      <div className="info_container_2">
        <div>
          Gender ratio
        </div>
        <div>
          <Progress
            sections={[
              { value: genderRatioMale, color: 'blue' },
              { value: genderRatioFemale, color: 'pink' },
            ]}
          />
        </div>
      </div>

      <div className="info_container_2">
        <div>
          Abilities
        </div>
      </div>

      <div className="info_container_2">
        <div>
          Breeding
        </div>
      </div>

      <div className="info_container_2">
        <div>
          Abilities
        </div>
      </div>
    </div>
  );
};

export default SecondPresentation;