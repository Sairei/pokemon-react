import React from 'react';

import { Tooltip } from '@mantine/core';

import TypeImage from '../../items/TypeImage';
import { simpleType } from '../../../utils/AvantageType';

const SimpleTypeTableLines = ({ types, setHover, selectedTypeName }) => {
  let selectedType;
  for (let i = 0; i < types.length; i++) {
    if (types[i].name === selectedTypeName) {
      selectedType = types[i];
      break;
    }
  }

  return (
    <tr className='type_tr' key={"def_" + selectedType.name}>
      <th className='row' onMouseEnter={() => setHover()}>
        <Tooltip key={selectedType.name} label={selectedType.name} >
          <div className={`poke_type ${selectedType.name}`} >
            <TypeImage typeName={selectedType.name} />
          </div>
        </Tooltip>
      </th>
      {types.map((attack, index) => {
        let { classname, multiple } = simpleType(selectedType, attack);

        classname += ` col_${index}`;
        return (
          <td key={attack.name + "_to_" + selectedType.name} className={`${classname}`} onMouseEnter={() => setHover(index)}>
            {multiple}
          </td>
        )
      })}
    </tr>
  )
};

export default SimpleTypeTableLines;