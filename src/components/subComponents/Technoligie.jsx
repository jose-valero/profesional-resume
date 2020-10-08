import React from 'react';

const Technoligie = ({ name, icon }) => {
  return (
    <div className='about__tech'>
      <img src={icon} alt='icon' className='about__tech-logo ' />
      <h6 className='about__tech-names'>{name}</h6>
    </div>
  );
};

export default Technoligie;
