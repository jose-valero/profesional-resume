import React from 'react';
import "../../assets/styles/subComponents/Diploma.scss"

const Diploma = ({ name, diploma, link }) => {
  return (
    <div className="diploma__container">
      <h5>{name}</h5>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img src={diploma} alt={name} />
      </a>
    </div>
  );
};

export default Diploma;
