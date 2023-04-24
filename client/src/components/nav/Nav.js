// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav__title'>
        <h2>Mern Blogger</h2>
      </div>
      <ul className='nav__links'>
          <li>
              <Link to='/'>Home</Link>
          </li>
          <li>
              <Link to='/create'>Create</Link>
          </li>
        </ul>
    </nav>
  );
};

export default Nav;