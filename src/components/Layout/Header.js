import React from 'react';
import Topbar from '../Topbar';

import './Header.css';

const Header = () => {
  return (
    <header>
      <Topbar />
      <div className='header-title'>Header</div>
    </header>
  );
};

export default Header;
