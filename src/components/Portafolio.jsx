import React from 'react';
import Project from './subComponents/Project';
import ProjectEN from './subComponents/ProjectEN';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/components/Portafolio.scss';
import { Projects, ProjectsEN } from './data/Data';
import { connect } from 'react-redux';

const Portafolio = (props) => {
  AOS.init();
  const langReducer = props.langReducer;
  if (langReducer === 'ES') {
    return (
      <div className='protafolio__container'>
        <div className='portafolio__hero'>
          <h1>Proyectos </h1>
        </div>
        <div>
          <h1 className='portafolio__hello-world display-3'>
            Hello World!
            <span role='img' aria-label=''>
              👾
            </span>
          </h1>
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
    );
  } else {
    return (
      <div className='protafolio__container'>
        <div className='portafolio__hero'>
          <h1>Projects </h1>
        </div>
        <div>
          <h1 className='portafolio__hello-world display-3'>
            Hello World!
            <span role='img' aria-label=''>
              👾
            </span>
          </h1>
        </div>
        <div
          className='portafolio__content'
          data-aos='fade-down'
          data-aos-easing='linear'
          data-aos-duration='450'
        >
          <div className='container'>
            <div className='timeline'>
              {ProjectsEN.map((pro) => (
                <ProjectEN key={pro.id} {...pro} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    langReducer: state.langReducer,
  };
};
export default connect(mapStateToProps, {})(Portafolio);
