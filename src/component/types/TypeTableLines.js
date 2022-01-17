import React, { useEffect, useState } from 'react';

import SimpleTypeTableLines from './table_lines/SimpleTypeTableLines';
import DoubleTypeTableLines from './table_lines/DoubleTypeTableLines';

const TypeTableLines = ({ selectedType, types, setHover }) => {

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