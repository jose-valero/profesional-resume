import React from 'react';
import AOS from 'aos';
import Card from 'react-bootstrap/Card';
import '../../assets/styles/subComponents/Hobbie.scss';

const Hobbie = ({ title, bodyText, image, footerTextES }) => {
  AOS.init();

  return (
    <Card className='hobbie__cards' data-aos='zoom-in'>
      <Card.Img
        className='hobbies__image'
        variant='top'
        src={image}
        
      />
      <Card.Body className='hobbie__card-body'>
        <Card.Title className='hobbie__card-title'>{title}</Card.Title>
        <Card.Text className='hobbie__body-text'>{bodyText}</Card.Text>
      </Card.Body>
      <Card.Footer className='hobbie__footer-body'>
        <small>{footerTextES} </small>
      </Card.Footer>
    </Card>
  );
};

export default Hobbie;
