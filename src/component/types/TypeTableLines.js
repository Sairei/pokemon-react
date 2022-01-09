import React from 'react';
import SimpleTypeTableLines from './table_lines/SimpleTypeTableLines';

const TypeTableLines = ({ types, setHover }) => {
  let tableLines;

  return (
    <SimpleTypeTableLines types={types} setHover={setHover()} />
  );
}

export default TypeTableLines;