import React from 'react';

const Social = ({ img, website }) => {
  return (
    <a href={website} target='_blank' rel='noopener noreferrer'>
      <img className='home__social-icon' src={img} alt='Linkedin' />
    </a>
  );
};

export default Social;
