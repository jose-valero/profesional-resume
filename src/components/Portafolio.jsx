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
          {Projects.map((items) => (
            <Project key={items.id} {...items} />
          ))}
        </VerticalTimeline>
      </div>

      {/* 

     <InView onChange={setInView}>
        {({ ref, inView }) => (
          
        <Project key={items.id} {...items} ref={ref}/>
        )}
      </InView>


      <div
        classNameName='portafolio__container'
        data-aos='fade-down'
        data-aos-easing='linear'
        data-aos-duration='650'
      >
        <div classNameName='portafolio__title'>Proyectos</div>
        <div classNameName='portafolio__content'>
          <div classNameName='fall-item fall-effect'>
            <img src='http://placeimg.com/260/260/nature/8/' alt='' />
            <div classNameName='mask'>
              <h2>Project Name</h2>
              <p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart.
              </p>
              <a href='#' classNameName='btn btn-default'>
                <FontAwesomeIcon icon={faGithub}> Repositorio</FontAwesomeIcon>
              </a>
              <a href='#' classNameName='btn btn-default'>
                <FontAwesomeIcon icon={faBell}>Deploy</FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Portafolio;