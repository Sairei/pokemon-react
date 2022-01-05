import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { Image, Table, Tooltip } from '@mantine/core';

import { changeFil } from '../../router/provider/Dispatcher';
import { getAllType } from '../../services/scripts/type/getAllType';
import Loading from '../items/Loading';
import TypeTableLines from './TypeTableLines';

const TypePage = () => {
  const dispatch = useDispatch();

  const [types, setTypes] = useState();
  const [isLoading, setIsLoading] = useState(true);

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

    if (isMount) {
      const pokedexLink = {
        name: "Types",
        link: "/types"
      }
      dispatch(changeFil([pokedexLink]));
    }

    return () => { isMount = false };
  }, 
    // eslint-disable-next-line
    [])

  if (isLoading) {
    return (<Loading />);
  }

  const theadType = types.map((type) => {
    return (
      <th key={"attack_" + type.name} className='col'>
        <Tooltip key={type.name} label={type.name} >
          <div className={`poke_type ${type.name}`} >
            <Image src={require(`../../assets/images/type/${type.name}.png`)} alt={type.name} />
          </div>
        </Tooltip>
      </th>
    )
  })

  return (
    <div className='types_container'>
      <Table className='type_table'>
        <thead>
          <tr>
            <th></th>
            {theadType}
          </tr>
        </thead>
        <TypeTableLines types={types} />
      </Table>
    </div>
  );
};

export default TypePage;