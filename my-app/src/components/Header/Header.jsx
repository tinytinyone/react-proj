import React from 'react';
import './Header.css';

const Header = () => {
    return <header className='header'>
        <div className='title'>
          <p className='title__heading'>For example</p>
        </div>
        <div>
          <button className='header__button-login'>Login</button>
        </div>
  </header>
}

export default Header;