import React from 'react';

import { Tooltip } from '@mantine/core';
import TypeImage from '../../items/TypeImage';
import { useNavigate } from 'react-router-dom';
import { simpleType } from '../../../utils/AvantageType';

const SimpleTypeTableLines = ({ types, setHover }) => {
  const nav = useNavigate();

  const tlines = types.map((def, defIndex) => {
    return (
      <tr className='type_tr' key={"def_" + def.name}>
        <th className='row' onMouseEnter={() => setHover()} onClick={() => nav(`/types/${def.name}`)} >
          <Tooltip key={def.name} label={def.name} >
            <div className={`poke_type ${def.name}`} >
              <TypeImage typeName={def.name} />
            </div>
          </Tooltip>
        </th>
        
        {types.map((attack, index) => {
          let { classname, multiple } = simpleType(def, attack);

          classname += ` col_${index}`;
          return (
            <td key={attack.name + "_to_" + def.name} className={`${classname} row_${defIndex}`} 
              onMouseEnter={() => setHover(index)} >
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