import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './Styles/Layout.css'
import Navbar from "../commonComponents/navbar/Navbar";
import { FaWhatsapp } from "react-icons/fa";
const Layout = () => {
  return (
      <div className='layout_container'>
          <div className='navbar_parent_container' >
            <Navbar />
          </div>
          <NavLink to={'https://web.whatsapp.com/'} target="_blank">
            <div  className="whatsapp_icon_container" style={{}}>
              <FaWhatsapp style={{fontSize:'1.75rem',color:'white'}}/>
            </div>
          </NavLink>
          <div className={''}>
            <Outlet />
          </div>
      </div>
  );
};

export default Layout;
