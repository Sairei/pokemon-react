import React from 'react';

import { Tooltip } from '@mantine/core';
import TypeImage from '../../items/TypeImage';

const SimpleTypeTableLines = ({ types, setHover }) => {
  const tlines = types.map((def, defIndex) => {
    const double = def.damage_relations.double_damage_from
    const half = def.damage_relations.half_damage_from
    const no = def.damage_relations.no_damage_from
    return (
      <tr className='type_tr' key={"def_" + def.name}>
        <th className='row' onMouseEnter={() => setHover()}>
          <Tooltip key={def.name} label={def.name} >
            <div className={`poke_type ${def.name}`} >
              <TypeImage typeName={def.name} />
            </div>
          </Tooltip>
        </th>
        {types.map((attack, index) => {
          let multiple = null;
          let classname = "";
          double.map((value) => {
            if (value.name === attack.name) {
              classname='double_damage';
              multiple = "x 2";
            }
            return value;
          })
          half.map((value) => {
            if (value.name === attack.name) {
              classname='half_damage'
              multiple = "x 1/2";
            }
            return value;
          })
          no.map((value) => {
            if (value.name === attack.name) {
              classname='no_damage';
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
            <td key={attack.name + "_to_" + def.name} className={`${classname} row_${defIndex}`} onMouseEnter={() => setHover(index)}>
              {multiple}
            </td>
          )
        })}
      </tr>
    )
  })

  return (
    <>
      {tlines}
    </>
  );
};

export default SimpleTypeTableLines;