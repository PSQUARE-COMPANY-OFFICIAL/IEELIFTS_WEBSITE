import React from "react";
import { Outlet } from "react-router-dom";
import './Styles/Layout.css'
import Navbar from "../commonComponents/navbar/Navbar";

const Layout = () => {
  return (
      <div className='layout_container'>
          <div className='navbar_parent_container' >
            <Navbar />
          </div>
          <div className={''}>
            <Outlet />
          </div>
      </div>
  );
};

export default Layout;
