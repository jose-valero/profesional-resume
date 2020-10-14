import React from 'react';

import '../../assets/styles/subComponents/School.scss';

const School = ({ img, title, text }) => {
  return (
    <>
      <div className='school__card '>
        <div className='school__hover school__hover-item text-white rounded'>
          <img src={img} alt='' />
          <div className='school__hover-overlay'></div>
          <div className='school__hover-item-content'>
            <h4 className='school__hover-item-title'>{title}</h4>
            <p className='school__hover-item-description text-uppercase'>
              {text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default School;
