import React from 'react';

import { Outlet } from 'react-router';

import Header from './items/Header';
import Footer from './items/Footer';

class MainPage extends React.Component {
  render() { 
    return (
      <div className="main_container">
        <Header />

        <Outlet />

        <Footer />
      </div>
    );
  }
}
 
export default MainPage;