import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NativeSelect, Switch } from "@mantine/core";
import Flags from 'country-flag-icons/react/3x2'

import { wantShiny } from "../../router/provider/Dispatcher";

const Header = () => {
  const dispatch = useDispatch();
  const isShiny = useSelector((state) => state.wantShiny);
  console.log(isShiny);

  const [flag, setFlag] = useState(
    <Flags.US width="27px" title="United States" />
  )

  const handleChangeLang = (value) => {
    // TODO : Creer un tableau qui liste tous les drapeaux possibles et une fonction pour récuperer le bon
    setFlag(
      <Flags.FR width="27px" title={value.label} />
    )
  }


  const handleShiny = () => {
    dispatch(wantShiny());
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
      <div className="right_header">
        <Switch
          defaultChecked={isShiny}
          onChange={() => handleShiny()}
          className="switch"
          label="Shiny ?" />
        <NativeSelect className="right"
          data={[
            { value: "US", label: "English" },
            { value: "FR", label: "Français" }
          ]}
          onChange={(event) => handleChangeLang(event.currentTarget)}
          icon={flag} />
      </div>
    </div>
  )
}

export default Header;