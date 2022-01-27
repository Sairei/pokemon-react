import React from 'react';

import { convertGameToColor } from '../../../services/utils/ColorGameUtil';

const Entrie = ({ entrie }) => {
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

      <td className='entrie_text'>
        {entrie.flavor_text}
      </td>
    </tr>
  );
};

export default Entrie;