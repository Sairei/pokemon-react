import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mantine/core';

import TypeImage from '../../items/TypeImage';
import { doubleType, simpleType } from '../../../utils/AvantageType';

const SimpleTypeTableLines = ({ types, setHover, selectedTypeName }) => {
  const nav = useNavigate();

  let selectedType;
  for (let i = 0; i < types.length; i++) {
    if (types[i].name === selectedTypeName) {
      selectedType = types[i];
      break;
    }
  }

  const tlines = types.filter((t) => {
    if (t.name === selectedType.name) {
      return false;
    }
    return true;
  }).map((def) => {
    return (
      <tr className='type_tr' key={"def_" + selectedType.name + "_" + def.name}>
        <th className='row' onMouseEnter={() => setHover()}>
          <Tooltip opened={false} label={selectedType.name} >
            <div className={`poke_type ${selectedType.name}`} >
              <TypeImage typeName={selectedType.name} />
            </div>
          </Tooltip>
          <Tooltip key={def.name} label={def.name} style={{ marginLeft: '10px' }}>
            <div className={`poke_type row_clicked ${def.name}`} onClick={() => nav(`/types/${def.name}`)} >
              <TypeImage typeName={def.name} />
            </div>
          </Tooltip>
        </th>
        {types.map((attack, index) => {
          let { classname, multiple } = doubleType(selectedType, def, attack);

          classname += ` col_${index}`;
          return (
            <td key={attack.name + "_to_" + selectedType.name + "_" + def.name} className={`${classname}`} onMouseEnter={() => setHover(index)}>
              {multiple}
            </td>
          )
        })}
      </tr>
    )
  })

  return (
    <>
      <tr className='type_tr' key={"def_" + selectedType.name} >
        <th className='row' onMouseEnter={() => setHover()} style={{ display: 'flex' }} >
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
            <td key={attack.name + "_to_" + selectedType.name} className={`${classname}`}
              onMouseEnter={() => setHover(index)} >
              {multiple}
            </td>
          )
        })}
      </tr>

      {tlines}
    </>
  );
};

export default SimpleTypeTableLines;