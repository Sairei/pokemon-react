import React from 'react';

import { convertGameToColor } from '../../../services/utils/ColorGameUtil';

const Entrie = ({ entrie, writeText, nbRow }) => {
  let classWithoutBorder = "";
  if (nbRow !== 1) {
    classWithoutBorder = "td_without_border";
  }

  return (
    <tr className='entrie'>
      <td className={classWithoutBorder}>
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