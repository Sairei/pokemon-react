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
      <div key={name + "_" + v.version.name} className="info_container_2 sub_container location_version">
        <div
          className='version_name'
          style={{
            backgroundColor: convertGameToColor(v.version.name).background,
            color: convertGameToColor(v.version.name).text
          }}
        >
          {v.version.name}
        </div>

        <div>
          <ul>
            {
              v.encounter_details.map((d, indexD) => {
                return (
                  <li key={indexD}>
                    {"Encountered while "}
                    {
                      d.method.names.filter((e) => e.language.name === "en")[0].name
                    }
                    {" at level "}
                    {
                      d.max_level
                    }
                    {" ("}
                    {
                      d.chance
                    }
                    {"% chance)"}
                    <ul>
                      <li>
                        {"At level "}
                        {
                          d.max_level
                        }
                      </li>
                      {
                        d.condition_values.map((c, indexC) => {
                          return (
                            <li key={indexC}>
                              {c.names.filter((e) => e.language.name === "en")[0].name}
                            </li>
                          );
                        })
                      }
                    </ul>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  })

  return (
    <div className="info_container_1 sub_container">
      <div className='location_name'>
        {name}
      </div>

      <div className='location'>
        {details}
      </div>
    </div>
  );
};

export default Location;