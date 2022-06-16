import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='header'>
      <div class="hola">
        <span>
          <Link to='/'>Home</Link>
        </span>
        <span>
          <Link to='/user'>UserForm</Link>
        </span>
        <span>
          <Link to='/characters'>Characters</Link>
        </span>
      </div>
    </nav>
  );
};

export default Header;
