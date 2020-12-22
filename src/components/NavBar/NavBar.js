import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo-straight.png';

const NavBar = () => {
  return (
    <nav
      className='navbar navbar-light'
      style={{ backgroundColor: '#215e3c' }}
    >
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <img
            src={logo}
            height='50'
            className='d-inline-block align-top'
            alt=''
          />
        </a>
        <Link to={`/casts`}>
          <button className='btn btn-success'>
            {' '} Character List
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
