import React, { useState } from "react";
import './Styles/Navbar.css';
import logoImage from '../../assets/IEE-LIFTS-LOGOX.svg';
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCaretDown,FaCaretUp } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState({
    navigation: false,
    dropdown: false,
  });

  const openCloseHandler = () => {
    setIsOpen((prev) => ({
      ...prev,
      navigation: !prev.navigation,
    }));
  };

  const dropdownHandler = () => {
    setIsOpen((prev) => ({
      ...prev,
      dropdown: !prev.dropdown,
    }));
  };

  return (
    <div className='navbar_container'>
      <div className='navbar_sub_container'>
        <div className="navbar_child_left">
          <NavLink className={({ isActive }) => isActive ? 'active' : ''} to={'/'}>
            <img src={logoImage} alt="Logo" />
          </NavLink>
        </div>

        <div className="openCloseButton" onClick={openCloseHandler}>
          {isOpen.navigation ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`navbar_child_center ${isOpen.navigation ? "active" : "close"}`}>
          <li>
            <NavLink to={'/about'} className={({ isActive }) => isActive ? 'active' : 'inactive'}>
              ABOUT
            </NavLink>
          </li>
          <li className="" style={{position:'relative'}}>
            <div
              onClick={() => dropdownHandler()}
              className='isActive'
              style={{color:'var(--primary-color',position:'relative'}}
            >
              LIFT {isOpen.dropdown?<FaCaretUp className={ isOpen.dropdown ? 'active' : 'inactive'}  style={{position:'relative',top:'0.2rem'}}/>:<FaCaretDown />}
            </div>
            {isOpen.dropdown && <Dropdown />}
          </li>
          <li>
            <NavLink to={'/maintenance'} className={({ isActive }) => isActive ? 'active' : 'inactive'}>
              MAINTENANCE
            </NavLink>
          </li>
          <li>
            <NavLink to={'/accomplished-work'} className={({ isActive }) => isActive ? 'active' : 'inactive'}>
              ACCOMPLISHED WORK
            </NavLink>
          </li>
          <li>
            <NavLink to={'/process'} className={({ isActive }) => isActive ? 'active' : 'inactive'}>
              PROCESS
            </NavLink>
          </li>
          <li>
            <NavLink to={'/safety'} className={({ isActive }) => isActive ? 'active' : 'inactive'}>
              SAFETY
            </NavLink>
          </li>
          <li>
            <NavLink to={'/contact'} className={({ isActive }) => isActive ? 'active' : 'inactive'}>
              CONTACT
            </NavLink>
          </li>
        </div>

        <div className="navbar_child_right">
          <NavLink to={'/customize-lifts'}>
            <div className="navbar_child_right_cl_button">CUSTOMIZE LIFTS</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


export const Dropdown=()=>{
  return(
    <div className="lifts_dropdown_container">
      <li><NavLink to={'/commercial-lifts'} className={({ isActive }) => isActive ? 'active' : 'inactive'}>COMMERCIAL LIFTS</NavLink></li>
      <li><NavLink to={'/residential-lifts'} className={({ isActive }) => isActive ? 'active' : 'inactive'}>RESIDENTIAL LIFTS</NavLink></li>
      <li><NavLink to={'/hotel-lifts'} className={({ isActive }) => isActive ? 'active' : 'inactive'}>HOTEL LIFTS</NavLink></li>
      <li><NavLink to={'/hospital-lifts'} className={({ isActive }) => isActive ? 'active' : 'inactive'}>HOSPITAL LIFTS</NavLink></li>
      <li><NavLink to={'/industrial-lifts'} className={({ isActive }) => isActive ? 'active' : 'inactive'}>INDUSTRIAL LIFTS</NavLink></li>
    </div>
  )
}