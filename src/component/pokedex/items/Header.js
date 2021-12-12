import { NativeSelect } from "@mantine/core";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header_filter">
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

export default Header;