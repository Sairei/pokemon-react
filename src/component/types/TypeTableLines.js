import React, { useEffect, useState } from 'react';

import SimpleTypeTableLines from './table_lines/SimpleTypeTableLines';
import DoubleTypeTableLines from './table_lines/DoubleTypeTableLines';
import { useParams } from 'react-router-dom';

const TypeTableLines = ({ types, setHover }) => {
  const { selectedType } = useParams();
  const [tableLines, setLines] = useState(<></>);

  useEffect(() => {
    let lines;
    if (selectedType) {
      lines = <DoubleTypeTableLines types={types} setHover={setHover} selectedTypeName={selectedType} />
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