import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SimpleTypeTableLines from './table_lines/SimpleTypeTableLines';
import DoubleTypeTableLines from './table_lines/DoubleTypeTableLines';
import { changeFil } from '../../router/provider/Dispatcher';

const TypeTableLines = ({ types, setHover }) => {
  const dispatch = useDispatch();
  const filAriane = useSelector((state) => state.filAriane);

  const { selectedType } = useParams();
  const [tableLines, setLines] = useState(<></>);

  useEffect(() => {
    let lines;
    if (selectedType) {
      lines = <DoubleTypeTableLines types={types} setHover={setHover} selectedTypeName={selectedType} />

      const pokemonLink = {
        name: selectedType ,
        link: `/types/${selectedType}`
      }
      let newFil = [filAriane[0]];
      newFil.push(pokemonLink);
      dispatch(changeFil(newFil));

    } else {
      lines = <SimpleTypeTableLines types={types} setHover={setHover} />
    }
    setLines(lines)
  },
    // eslint-disable-next-line
    [selectedType])

  return (
    <>
      {tableLines}
    </>
  );
}

export default TypeTableLines;