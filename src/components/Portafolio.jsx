import React from 'react';
import Project from './subComponents/Project';

import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/components/Portafolio.scss';
import { Projects } from './data/Data';

const Portafolio = () => {
  AOS.init();

  return (
    <>
      <div className='protafolio__container'>
        <div className='portafolio__hero'>
          <h1>Projectos </h1>
        </div>
        <div>
          <h1 className="portafolio__hello-world display-3">Hello World!</h1>
        </div>
        <div
          className='portafolio__content'
          data-aos='fade-down'
          data-aos-easing='linear'
          data-aos-duration='450'
        >
          <div className='container'>
            <div className='timeline'>
              {Projects.map((pro) => (
                <Project key={pro.id} {...pro} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portafolio;
