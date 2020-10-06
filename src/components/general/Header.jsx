import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap/';
import Button from 'react-bootstrap/Button';

import { lanSelect } from '../../actions';
import '../../assets/styles/components/Header.css';

class Header extends React.Component {
  render() {
    const langReducer = this.props.langReducer;
    var esActive, enActive;
    if (langReducer === 'ES') {
      esActive = 'btn btn-success';
      enActive = 'btn btn-primary';
    } else {
      esActive = 'btn btn-success';
      enActive = 'btn btn-primary';
    }
    return (
      <Navbar
        collapseOnSelect
        expand={'lg'}
        bg='dark'
        variant='dark'
        className='header__container '
        sticky='top'
      >
        <div className='d-flex'>
          <Link to='/' className='header__brand font-weight-bolder'>
            Home
          </Link>
          <Button
            role='button'
            aria-pressed='true'
            size='sm'
            className={`${esActive}`}
            type='button'
            onClick={() => this.props.lanSelect('ES')}
          >
            ES
          </Button>
          |
          <Button
            role='button'
            aria-pressed='true'
            size='sm'
            type='button'
            className={`${enActive}`}
            onClick={() => this.props.lanSelect('EN')}
          >
            EN
          </Button>
        </div>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' className='' />
        <Navbar.Collapse id='responsive-navbar-nav' className='header__content'>
          <Nav className='mx-auto'>
            <Link className='header__item' to='/About'>
              About
            </Link>
            <Link className='header__item' to='/formation'>
              formation
            </Link>
            <Link className='header__item' to='/experience'>
              experience
            </Link>
            <Link className='header__item' to='/contact'>
              contact
            </Link>
            <Link className='header__item' to='/spotify'>
              Spotify
            </Link>
            <Link className='header__item' to='/resume'>
              Download Resume
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    langReducer: state.langReducer,
  };
};

export default connect(mapStateToProps, { lanSelect })(Header);
