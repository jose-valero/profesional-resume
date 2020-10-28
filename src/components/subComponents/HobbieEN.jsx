import React from 'react';
import AOS from 'aos';
import Card from 'react-bootstrap/Card';
import '../../assets/styles/subComponents/Hobbie.scss';

const HobbieEN = ({ title, bodyTextEnglish, image, footerText }) => {
  AOS.init();

  return (
    <Card className='hobbie__cards' data-aos='zoom-in'>
      <Card.Img
        className='hobbies__image rounded mx-auto d-block'
        variant='top'
        src={image}
      />
      <Card.Body className='hobbie__card-body'>
        <Card.Title className='hobbie__card-title'>{title}</Card.Title>
        <Card.Text className='hobbie__body-text'>{bodyTextEnglish}</Card.Text>
      </Card.Body>
      <Card.Footer className='hobbie__footer-body'>
        <small>{footerText} </small>
      </Card.Footer>
    </Card>
  );
};

export default HobbieEN;
