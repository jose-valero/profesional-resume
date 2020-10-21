import React from 'react';
import '../../assets/styles/components/Home.scss';

const Social = ({ img, website }) => {
  return (
    <>
      <a href={website}>
        <img className='home__social-icon' src={img} alt='...' />
      </a>
    </>
  );
};

export default Social;
