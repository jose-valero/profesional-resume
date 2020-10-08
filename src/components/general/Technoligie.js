import React from 'react';

const Technoligie = ({ name, icon }) => {
  return (
    <div className='about__technologies'>
      <div className='tech__names'>{name}</div>
      <img src={icon} alt='icon' className='about__tech-logo' />
    </div>
  );
};

export default Technoligie;
