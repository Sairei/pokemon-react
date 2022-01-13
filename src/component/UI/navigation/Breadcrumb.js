import React from 'react';

import { Link } from 'react-router-dom';

const Breadcrumb = ({ filAriane }) => {
  return (
    <ul className='breadcrumb'>
      {filAriane.map((value, index) => {
        return (
          <li key={value.name + "_" + index} className="ariane-list-item">
            <Link to={value.link} className="ariane-link">
              {value.name}
            </Link>
            { filAriane[index + 1] && <span>&gt;</span> }
          </li>
        )
      })}
    </ul>
  );
};

export default Breadcrumb;