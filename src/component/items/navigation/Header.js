import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Burger, NativeSelect, Switch } from "@mantine/core";
import Flags from 'country-flag-icons/react/3x2'

import { isNavbarOpen, wantShiny } from "../../../router/provider/Dispatcher";
import Breadcrumb from "./Breadcrumb";

const Header = () => {
  const dispatch = useDispatch();
  const isShiny = useSelector((state) => state.wantShiny);
  const open = useSelector((state) => state.isNavbarOpen);
  const filAriane = useSelector((state) => state.filAriane);

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

      <div className="left_header">
        <Burger
          className="burger"
          color="#FFFFFF"
          opened={open}
          onClick={() => dispatch(isNavbarOpen())} />

        <Breadcrumb 
          filAriane={filAriane} />
      </div>

      <div className="right_header">
        <Switch
          defaultChecked={isShiny}
          onChange={() => handleShiny()}
          className="switch"
          label="Shiny ?" />

        <NativeSelect 
          disabled
          className="right"
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