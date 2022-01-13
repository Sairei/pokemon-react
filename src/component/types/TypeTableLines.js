import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import SimpleTypeTableLines from './table_lines/SimpleTypeTableLines';
import DoubleTypeTableLines from './table_lines/DoubleTypeTableLines';
import { changeFil } from '../../router/provider/Dispatcher';

const TypeTableLines = ({ selectedType, types, setHover }) => {
  const dispatch = useDispatch();

  const [tableLines, setLines] = useState(<></>);

  useEffect(() => {
    let lines;

    const typeLink = {
      name: "Types",
      link: "/types"
    }
    dispatch(changeFil([typeLink]));

    if (selectedType) {
      lines = <DoubleTypeTableLines types={types} setHover={setHover} selectedTypeName={selectedType} />

      const selectTypeLink = {
        name: selectedType,
        link: `/type/${selectedType}`
      }
      let newFil = [typeLink];
      newFil.push(selectTypeLink);
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