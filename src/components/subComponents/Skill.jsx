import React from 'react';

const Skill = ({ skill, speech, inner, porcentaje }) => {
  return (
    <div className='skill__bar mt-5'>
      <div className='skill__bar-outer'>
        <div className={speech}>{porcentaje}</div>
        <div className={inner} />
      </div>
      <div className='skill__name'>{skill}</div>
    </div>
  );
};

export default Skill;
