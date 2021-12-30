import React from 'react';

import { Link } from 'react-router-dom';

const Breadcrumb = ({ filAriane }) => {
  return (
    <ul>
      {filAriane.map((value, index) => {
        return (
          <>
            <li key={value.name} className="ariane-list-item">
              <Link to={value.link} className="ariane-link">
                {value.name}
              </Link>
            </li>
            {
              filAriane[index + 1] &&
              <li className="ariane-list-item">
                <span>&gt;</span>
              </li>
            }
          </>
        )
      })}
    </ul>
  );
};

export default Breadcrumb;