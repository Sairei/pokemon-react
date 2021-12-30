import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Drawer, Navbar, Space } from '@mantine/core';

import { isNavbarOpen } from "../../../router/provider/Dispatcher";

const Navigation = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.isNavbarOpen);

  console.log(open);
  return (
    <Drawer
    classNames={{
      root: 'drawer',
      drawer: 'drawer',
      overlay: 'drawer_overlay',
      header: 'drawer_header',
      title: 'drawer_title',
    }}
      hideCloseButton
      title="Menu"
      opened={open}
      onClose={() => dispatch(isNavbarOpen())} >

      <Navbar >

        <Navbar.Section>
          <ul className="middle-items">
            <li className="list-item">
              <Link to="/" className="link">
                Pokedex
              </Link>
            </li>
            
            <Space h="md" />

            <li className="list-item">
              <Link to="/about" className="link">
                About
              </Link>
            </li>
          </ul>
        </Navbar.Section>

      </Navbar>

    </Drawer>
  );
};

export default Navigation;