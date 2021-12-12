import React from "react";

import { NativeSelect } from "@mantine/core";

export const HeaderPokedex = () => {
  return (
    <div className="header_pokedex">
      <div className="filter_container">
        <ul>
          <li>
            <NativeSelect 
              label="Region"
              data={[
                {value: "", label: ""}
              ]}
            />
          </li>
          <li>
            <NativeSelect 
              label="Type"
              data={[
                {value: "", label: ""}
              ]}
            />
          </li>
          <li>
            <NativeSelect 
              label="Trier par..."
              data={[
                {value: "", label: ""}
              ]}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}