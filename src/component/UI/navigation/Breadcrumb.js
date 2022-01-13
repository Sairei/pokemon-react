import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Breadcrumb = ({ filAriane }) => {
  return (
    <ul className='breadcrumb'>
      <li className="ariane-list-item">
        <Link to={"/"} className="ariane-link">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </Link>
      </li>
      {filAriane.map((value, index) => {
        return (
          <li key={value.name + "_" + index} className="ariane-list-item">
            <Link to={value.link} className="ariane-link">
              {value.name}
            </Link>
            {filAriane[index + 1] && <span>&gt;</span>}
          </li>
        )
      })}
    </ul>
  );
};

export default Breadcrumb;