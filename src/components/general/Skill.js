import React from 'react';

const Skill = ({ skill, speech, inner, porcentaje }) => {
  return (
    <div className='bar'>
      <div className='skill'>{skill}</div>
      <div className='bar-outer'>
        <div className={speech}>{porcentaje}</div>
        <div className={inner} />
      </div>
    </div>
  );
};

export default Skill;
