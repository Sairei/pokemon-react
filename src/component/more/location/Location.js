import React from 'react';

import { convertGameToColor } from '../../../services/utils/ColorGameUtil';

const Location = ({ location }) => {
  let name = location.location.names.filter((e) => {
    return e.language.name === "en";
  });
  name = name[0].name;

  let details = location.version_details.map((v) => {
    console.log(v);
    return (
      <div key={v.version.name} className="info_container_2 sub_container location_version">
        <div
          className='version_name'
          style={{
            backgroundColor: convertGameToColor(v.version.name).background,
            color: convertGameToColor(v.version.name).text
          }}
        >
          {v.version.name}
        </div>
      </div>
    );
  })

  return (
    <div className="info_container_1 sub_container">
      {name}

      <div className='location'>
        {details}
      </div>
    </div>
  );
};

export default Location;