import React from 'react';
import Project from './subComponents/Project';
import { Projects } from './data/Data';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBell } from '@fortawesome/free-solid-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/components/Portafolio.scss';

const Portafolio = () => {
  AOS.init();

  return (
    <>
      <div className='portafolio__container'>
        <div className='portafolio__hero'>
          <h1>Proyectos chetos</h1>
        </div>
        <VerticalTimeline>
          {Projects.map((pro) => (
            <Project key={pro.id} {...pro} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Portafolio;
