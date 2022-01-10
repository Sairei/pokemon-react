import React from 'react';

import { Tooltip } from '@mantine/core';

import TypeImage from '../../items/TypeImage';

const SimpleTypeTableLines = ({ types, setHover, selectedTypeName }) => {
  let selectedType;
  for (let i = 0; i < types.length; i++) {
    if (types[i].name === selectedTypeName) {
      selectedType = types[i];
      break;
    }
  }

  const double = selectedType.damage_relations.double_damage_from
  const half = selectedType.damage_relations.half_damage_from
  const no = selectedType.damage_relations.no_damage_from
  
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
        let multiple = null;
        let classname = "";
        double.map((value) => {
          if (value.name === attack.name) {
            classname = 'double_damage';
            multiple = "x 2";
          }
          return value;
        })
        half.map((value) => {
          if (value.name === attack.name) {
            classname = 'half_damage'
            multiple = "x 1/2";
          }
          return value;
        })
        no.map((value) => {
          if (value.name === attack.name) {
            classname = 'no_damage';
            multiple = "x 0";
          }
          return value;
        })

        if (!multiple) {
          classname = "normal_damage";
          multiple = "";
        }

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