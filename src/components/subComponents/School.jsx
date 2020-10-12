import React from 'react';
import Card from 'react-bootstrap/Card';
// import { School_Social } from '../data/Data';
import '../../assets/styles/subComponents/School.scss';

const School = ({
  footerText,
  title,
  img,
  text,
  rs_link_icon,
  rs_link_web,
  web,
  logo,
  rs_ig_web,
  rs_tw_web,
  rs_ig_icon,
  rs_tw_icon,
}) => {
  return (
    <Card>
      <Card.Img variant='top' src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className='school__footer-icons'>
          <a href={web}>
            <img src={logo} alt='web' className='school__social-icon' />
          </a>
          <a href={rs_link_web}>
            <img
              src={rs_link_icon}
              alt='link'
              className='school__social-icon'
            />
          </a>
          <a href={rs_tw_web}>
            <img src={rs_tw_icon} alt='tw' className='school__social-icon' />
          </a>
          <a href={rs_ig_web}>
            <img src={rs_ig_icon} alt='ig' className='school__social-icon' />
          </a>
        </div>
        <small className='text-muted py-4 my-4'>{footerText}</small>
      </Card.Footer>
    </Card>
  );
};

export default School;
