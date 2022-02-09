import React from 'react';

const Location = ({ location }) => {
  let name = location.location.names.filter((e) => {
    return e.language.name === "en";
  });
  name = name[0].name;

  return (
    <div className="info_container_1 sub_container">
      {name}
    </div>
  );
};

export default Location;