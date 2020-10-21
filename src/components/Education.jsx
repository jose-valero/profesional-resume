import React from 'react';
import { connect } from 'react-redux';

import AOS from 'aos';

import 'aos/dist/aos.css';
import '../assets/styles/App.scss';
import '../assets/styles/components/Education.scss';
import { Certifications, Educations } from './data/Data';
import School from './subComponents/School';
import Diploma from './subComponents/Diploma';

class Education extends React.Component {
  render() {
    AOS.init();
    const langReducer = this.props.langReducer;
    if (langReducer === 'ES') {
      return (
        <div className='education__container'>
          <div className='education__hero'>
            <h1>Formación</h1>
          </div>
          <div
            className='education__content'
            data-aos='fade-down'
            data-aos-easing='linear'
            data-aos-duration='450'
          >
            <div className='education__content-title'>
              <h1>Niveles</h1>
            </div>
            <div className='education__row-1'>
              {Educations.map((edu) => (
                <School key={edu.id} {...edu} />
              ))}
            </div>

            <div className='education__row-2'>
              <h1>Certificaciones</h1>
              <div className='education__diploma-container'>
                {Certifications.map((cert) => (
                  <div
                    className='diploma__container-item '
                    key={cert.id}
                    data-aos='zoom-out'
                  >
                    <Diploma {...cert} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className='education__container'>
            <div className='Education__title'>
              <h1>Education</h1>
            </div>
            <div className='row education__content'>
              <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                <h1>Content1</h1>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 '>
                <h1>Content2</h1>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 '>
                <h1>Content3</h1>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

const mapStateToprops = (state) => {
  return {
    langReducer: state.langReducer,
  };
};

export default connect(mapStateToprops, {})(Education);
