import React from 'react';

import { Outlet } from 'react-router';

class MainPage extends React.Component {
  render() { 
    return (
      <div className="main_container">
        <Outlet />
      </div>
    );
  }
}
 
export default MainPage;