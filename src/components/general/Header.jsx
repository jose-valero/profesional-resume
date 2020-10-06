import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap/';
import '../../assets/styles/components/Header.css';

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      className='header__container'
    >
      <Link to='/' className='header__brand font-weight-bolder'>
        Profesional Resume
      </Link>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className=''>
          <Link className='header__item' to='/contact'>
            {' '}
            Contact
          </Link>
          <Link className='header__item' to='/formation'>
            {' '}
            formation
          </Link>
          <Link className='header__item' to='/experience'>
            {' '}
            experience
          </Link>
          <Link className='header__item' to='/spotify'>
            {' '}
            Spotify
          </Link>
          <Link className='header__item' to='/spotify'>
            {' '}
            Spotify
          </Link>
          <Link className='header__item' to='/spotify'>
            {' '}
            Download Resume
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // <div className='bg-danger header__container'>
    //   <button className="btn btn-primary">asd</button>
    //   <Link className="header__item" to='/contact'> Contact</Link>
    //   <Link className="header__item" to='/formation'> formation</Link>
    //   <Link className="header__item" to='/experience'> experience</Link>
    //   <Link className="header__item" to='/spotify'> Spotify</Link>
    //   <Link className="header__item" to='/spotify'> Spotify</Link>
    //   <Link className="header__item" to='/spotify'> Spotify</Link>
    // </div>
  );
};

export default Header;
