import React from 'react';

import { Outlet } from 'react-router';

import Header from './items/Header';

class MainPage extends React.Component {
  render() { 
    return (
      <div className="main_container">
        <Header />

        <Outlet />
      </div>
    );
  }
}
 
export default MainPage;