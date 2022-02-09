import React from "react";
import { Outlet, Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link to='/' className='navbar-brand'>
        Prenumerera mera
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <Link to='bortskankes' className='nav-item nav-link'>
            Bortskankes.se
          </Link>
          <span className='sr-only'></span>

          <Link to='bibliotek' className='nav-item nav-link'>
            Stockholms Bibliotek
          </Link>

          <a className='nav-item nav-link' href='#'>
            Eventuelt flera länkar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
