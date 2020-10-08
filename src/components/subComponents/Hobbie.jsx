import React from 'react';
import AOS from 'aos';
import Card from 'react-bootstrap/Card';
import '../../assets/styles/subComponents/Hobbie.scss';

const Hobbie = ({ title, bodyText, image, footerText }) => {
  AOS.init();
  return (
    <Card className="hobbie__cards" data-aos="zoom-in">
      <Card.Img variant='top' src={image} className='hobbies__image' />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{bodyText}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className='text-muted'>{footerText} </small>
      </Card.Footer>
    </Card>
  );
};

export default Hobbie;
