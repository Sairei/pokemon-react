import React from 'react';

import { convertGameToColor } from '../../../services/utils/ColorGameUtil';

const Entrie = ({ entrie, writeText, nbRow }) => {
  return (
    <tr className='entrie'>
      <td>
        <div
          className='version_name'
          style={{
            backgroundColor: convertGameToColor(entrie.version.name).background,
            color: convertGameToColor(entrie.version.name).text
          }}
        >
          {entrie.version.name}
        </div>
      </td>

      {
        writeText &&
        <td rowSpan={nbRow}>
          <div className='entrie_text'>
            {entrie.flavor_text}
          </div>
        </td>
      }
    </tr>
  );
};

export default Entrie;