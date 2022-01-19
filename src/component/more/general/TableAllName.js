import React from 'react';

import { Table } from '@mantine/core';

import { EnumLang, EnumLangFlagAndFullName } from '../../../services/utils/EnumLang';

const TableAllName = ({ names }) => {
  const row = names.filter((n) => {
    if (n.language.name === "en") {
      return false;
    }
    if (EnumLang.includes(n.language.name)) {
      return true;
    }
    return false;
  }).map((n, index) => {
    return (
      <tr key={n.language.name}>
        <td>
          {EnumLangFlagAndFullName.find(elt => elt.id === n.language.name).flag}
        </td>
        <td>
          {EnumLangFlagAndFullName.find(elt => elt.id === n.language.name).fullName}
        </td>
        <td>
          {n.name}
        </td>
      </tr>
    );
  });

  return (
    <div className="info_container_1">
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th colSpan={3}>Name</th>
          </tr>
        </thead>
        <tbody>
          {row}
        </tbody>
      </Table>
    </div>
  );
};

export default TableAllName;