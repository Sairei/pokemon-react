import { AppShell } from '@mantine/core';
import React from 'react';

import { Outlet } from 'react-router';

import Header from './items/navigation/Header';
import Navigation from './items/navigation/Navigation';

class MainPage extends React.Component {
  render() {
    return (
      <div className="main_container">
        <AppShell
          fixed
          classNames={{
            main: "main_body"
          }}
          navbar={<Navigation />}
          header={<Header />}>

          <Outlet />

        </AppShell>
      </div>
    );
  }
}

export default MainPage;