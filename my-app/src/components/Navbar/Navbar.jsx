import React from 'react';
import { NavLink } from 'react-router-dom';
import   './Navbar.css';

const setActive = ({isActive}) => isActive ? 'active-link' : '';

const Navbar = () => {
  return <nav className='nav'>
    <div className='item'>
      <NavLink to='/Profile' className={setActive}>Profile</NavLink>
    </div>
    <div className='item'>
      <NavLink to='/Messages' className={setActive}>Messages</NavLink>
    </div>
    <div className='item'>
      <NavLink to='/News' className={setActive}>News</NavLink>
    </div>
    <div className='item'>
      <NavLink to='/Music' className={setActive}>Music</NavLink>
    </div>
    <div className='item'>
      <NavLink to='/Settings' className={setActive}>Settings</NavLink>
    </div>
  </nav>
}

export default Navbar;