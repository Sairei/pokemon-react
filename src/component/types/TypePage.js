import React, { useEffect, useState } from 'react';

import { Table, Tooltip } from '@mantine/core';

import { getAllType } from '../../services/scripts/type/getAllType';
import Loading from '../items/Loading';
import TypeImage from '../items/TypeImage';
import TypeTableLines from './TypeTableLines';

const TypePage = () => {

  const [types, setTypes] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [colHover, setColHover] = useState();

  useEffect(() => {
    let isMount = true;

    async function fetchData() {
      await getAllType()
        .then(({ types }) => {
          if (isMount) {
            types.sort((a, b) => (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0);
            setTypes(types);
            setIsLoading(false);
          }
        });
    }

    fetchData()

    return () => { isMount = false };
  },
    // eslint-disable-next-line
    [])

  if (isLoading) {
    return (<Loading />);
  }

  const theadType = types.map((type, index) => {
    return (
      <th key={"attack_" + type.name} className='col'
        onMouseEnter={() => setColHover(index)}>
        <Tooltip key={type.name} label={type.name} >
          <div className={`poke_type ${type.name}`} >
              <TypeImage typeName={type.name} />
          </div>
        </Tooltip>
      </th>
    )
  })

  const style = `
    th:nth-child(${colHover + 3}).col,
    td:nth-child(${colHover + 2}) {
      opacity: 1 !important;
    }`
  return (
    <div className='types_container'>
      <Table className='type_table' style={{ textAlign: "center" }}>
        <style>
          {style}
        </style>
        <thead>
          <tr>
            <th></th>
            <th style={{ textAlign: "center" }} colSpan={types.length + 1}>Attack</th>
          </tr>
        </thead>
        <tbody className='type_table_body' onMouseLeave={() => setColHover()}>
          <tr>
            <th className="vertical_text" rowSpan={types.length + 1}>Defense</th>
            <th onMouseEnter={() => setColHover()}></th>
            {theadType}
          </tr>
          <TypeTableLines types={types} setHover={setColHover} />
        </tbody>
      </Table>
    </div>
  );
};

export default TypePage;