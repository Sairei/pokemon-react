import React from 'react';

import { Image, Tooltip } from '@mantine/core';

const TypeTableLines = ({ types }) => {
  const tlines = types.map((def) => {
    const double = def.damage_relations.double_damage_from
    const half = def.damage_relations.half_damage_from
    const no = def.damage_relations.no_damage_from
    return (
      <tr className='type_tr' key={"def_" + def.name}>
        <th>
          <Tooltip key={def.name} label={def.name} >
            <div className={`poke_type ${def.name}`} >
              <Image src={require(`../../assets/images/type/${def.name}.png`)} alt={def.name} />
            </div>
          </Tooltip>
        </th>
        {types.map((attack) => {
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

          return (
            <td key={attack.name + "_to_" + def.name} className={classname}>
              {multiple}
            </td>
          )
        })}
      </tr>
    )
  })

  return (
    <tbody className='type_table_body'>
      {tlines}
    </tbody>
  );
};

export default TypeTableLines;