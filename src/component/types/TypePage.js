import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Table, Tooltip } from '@mantine/core';

import { getAllType } from '../../services/scripts/type/getAllType';
import NotFound from '../UI/NotFound';
import Loading from '../UI/Loading';
import TypeImage from '../UI/TypeImage';
import TypeTableLines from './TypeTableLines';

const TypePage = () => {
  const { selectedType } = useParams();
  const [error, setIsError] = useState(false);

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
            
            if(selectedType) {
              let err = true;
              for(let i=0; i<types.length; i++) {
                if(types[i].name === selectedType) {
                  err = false;
                }
              }
              setIsError(err);
            }
            
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

  if (error) {
    return (<NotFound what="Type" name={selectedType} />);
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
          <TypeTableLines selectedType={selectedType} types={types} setHover={setColHover} />
        </tbody>
      </Table>
    </div>
  );
};

export default TypePage;