import React, { useEffect, useState } from 'react';

import { Image, Table, Tooltip } from '@mantine/core';

import { getAllType } from '../../services/scripts/type/getAllType';
import Loading from '../items/Loading';

const TypePage = () => {
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

    return () => { isMount = false };
  }, [])

  if (isLoading) {
    return (<Loading />);
  }

  const theadType = types.map((type) => {
    return (
      <th>
        <Tooltip key={type.name} label={type.name} >
          <div className={`poke_type ${type.name}`} >
            <Image src={require(`../../assets/images/type/${type.name}.png`)} alt={type.name} />
          </div>
        </Tooltip>
      </th>
    )
  })

  const tlines = types.map((type) => {
    return (
      <tr key={type.name}>
        <td>
          <Tooltip key={type.name} label={type.name} >
            <div className={`poke_type ${type.name}`} >
              <Image src={require(`../../assets/images/type/${type.name}.png`)} alt={type.name} />
            </div>
          </Tooltip>
        </td>
      </tr>
    )
  })

  return (
    <div className='types_container'>
      <Table striped >
        <thead>
          <th></th>
          {theadType}
        </thead>
        <tbody>
          {tlines}
        </tbody>
      </Table>
    </div>
  );
};

export default TypePage;