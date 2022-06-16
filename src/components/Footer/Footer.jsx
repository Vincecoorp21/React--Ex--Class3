import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <nav className='nav-footer'>
        <Link to=''>About</Link>
        <Link to=''>Home</Link>
        <Link to=''>Services</Link>
        <Link to=''>Privacy Police</Link>
      </nav>
    </div>
  );
}

export default Footer;
