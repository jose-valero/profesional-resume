import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap/';

import { lanSelect } from '../../actions';
import '../../assets/styles/components/Header.scss';

import download from '../../assets/statics/icons/pdf-file.svg';
import usaFlag from '../../assets/statics/icons/usa_1.svg';
import argFlag from '../../assets/statics/icons/arg_1.svg';

class Header extends React.Component {
  render() {
    const langReducer = this.props.langReducer;

    if (langReducer === 'ES') {
      return (
        <Navbar
          collapseOnSelect
          expand={'lg'}
          className='header__container '
          fixed='top'
        >
          <div className='d-flex'>
            <Link to='/' className='header__brand font-weight-bolder'>
              Home
            </Link>
            <Link to='#' onClick={() => this.props.lanSelect('ES')}>
              <img src={argFlag} alt='' className='mx-1' />
            </Link>

            <Link to='#' onClick={() => this.props.lanSelect('EN')}>
              <img src={usaFlag} alt='' className='mx-1' />
            </Link>
          </div>

          <Navbar.Toggle aria-controls='responsive-navbar-nav' className='' />
          <Navbar.Collapse
            id='responsive-navbar-nav'
            className='header__content'
          >
            <Nav className='mx-auto'>
              <Link className='effect slide-up header__item' to='/About'>
                Conoceme
              </Link>
              <Link className='effect slide-up header__item' to='/education'>
                Educacion
              </Link>
              <Link className='effect slide-up header__item' to='/portafolio'>
                Portafolio
              </Link>
              <Link className='effect slide-up header__item' to='/contact'>
                Contactame
              </Link>

              <Link className='effect slide-up header__item' to='/resumen'>
                <img src={download} alt='' />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    } else {
      return (
        <Navbar
          collapseOnSelect
          expand={'lg'}
          className='header__container '
          fixed='top'
        >
          <div className='d-flex'>
            <Link to='/' className='header__brand font-weight-bolder'>
              Home
            </Link>
            <Link to='#' onClick={() => this.props.lanSelect('ES')}>
              <img src={argFlag} alt='' className='mx-1' />
            </Link>

            <Link to='#' onClick={() => this.props.lanSelect('EN')}>
              <img src={usaFlag} alt='' className='mx-1' />
            </Link>
          </div>

          <Navbar.Toggle aria-controls='responsive-navbar-nav' className='' />
          <Navbar.Collapse
            id='responsive-navbar-nav'
            className='header__content'
          >
            <Nav className='mx-auto'>
              <Link className='effect slide-up header__item' to='/About'>
                About me
              </Link>
              <Link className='effect slide-up header__item' to='/education'>
                Education
              </Link>
              <Link className='effect slide-up header__item' to='/portafolio'>
                Portafolio
              </Link>
              <Link className='effect slide-up header__item' to='/contact'>
                Contact
              </Link>

              <Link className='effect slide-up header__item' to='/resumen'>
                <img src={download} alt='' />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    langReducer: state.langReducer,
  };
};

export default connect(mapStateToProps, { lanSelect })(Header);
