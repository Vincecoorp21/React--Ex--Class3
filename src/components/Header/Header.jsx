import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/daily_planet.png';

const Header = () => {
  return (
    <nav className='header'>
      <div class='hola'>
        <img src={logo} alt='' />
        <div className='links-header'>
          <span>
            <Link to='/'>Home</Link>
          </span>
          <span>
            <Link to='/sendnews'>Send News</Link>
          </span>
          <span>
            <Link to='/news'>Get News</Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
