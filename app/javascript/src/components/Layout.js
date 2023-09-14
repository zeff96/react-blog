import { Outlet } from 'react-router-dom';
import NavbarComponet from './Navbar';

import React from 'react';

const Layout = () => {
  return (
    <div>
      <NavbarComponet />
      <Outlet />
    </div>
  );
};

export default Layout;
