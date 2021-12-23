import React, { useState } from "react";

import { Link } from "react-router-dom";
import { NativeSelect } from "@mantine/core";
import Flags from 'country-flag-icons/react/3x2'

const Header = () => {
  const [flag, setFlag] = useState(
    <Flags.US title="United States"/>
  )

  const handleChangeLang = (value) => {
    // TODO : Creer un tableau qui liste tous les drapeaux possibles et une fonction pour récuperer le bon
    setFlag(
      <Flags.FR title={value.label}/>
    )
  }

  return (
    <div className="nav-bar-container">
      <ul className="middle-items">
        <li className="list-item">
          <Link to="/" className="link">
            Pokedex
          </Link>
        </li>
        <li className="list-item">
          |
        </li>
        <li className="list-item">
          <Link to="/about" className="link">
            About
          </Link>
        </li>
      </ul>
      <NativeSelect className="language" 
        data={[
          {value: "US", label: "English"}, 
          {value: "FR", label: "Français"}
        ]}
        onChange={(event) => handleChangeLang(event.currentTarget)}
        icon={ flag }/>
    </div>
  )
}

export default Header;