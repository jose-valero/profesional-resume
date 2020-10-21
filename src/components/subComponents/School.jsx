import React from 'react';

import '../../assets/styles/subComponents/School.scss';

const School = ({ img, title, text }) => {
  return (
    <>
      <div className='school__card' data-aos="zoom-out">
        <div className='school__hover school__hover-item '>
          <img src={img} alt='schoolImage' />
          <div className='school__hover-overlay'></div>
          <div className='school__hover-item-content'>
            <h4 className='school__hover-item-title'>{title}</h4>
            <p className='school__hover-item-description'>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default School;
