import React from 'react';
import { connect } from 'react-redux';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import { Skills, Technologies } from './data/Data';
import Skill from './general/Skill';
import Technoligie from './general/Technoligie';

// import gitLogo from '../assets/statics/icons/github-tile.svg';

import '../assets/styles/components/About.scss';
import '../assets/styles/App.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

class About extends React.Component {
  render() {
    AOS.init();
    const langReducer = this.props.langReducer;
    if (langReducer === 'ES') {
      return (
        <>
          <div className=' about__container'>
            <div className='about__content '>
              <div className='row  about__content-text m-3'>
                <p>
                  Desde ya un año me comprometi a realizar un cambio rotundo
                  hacia el mundo de la Programacion y Desarrollo, Me considero
                  un asiduo estudiante y un profesional comprometido..
                  apasionado con nuevas tecnologias y con miras a convertirme en
                  FullStack Developer, y por que no, Algun dia dirigir grandes
                  proyectos.
                </p>
              </div>

              <div className='row'>
                <div className='col text-center  mx-1'>
                  <div className='about__skill-container'>
                    <div className='col-12 col-md-4 col-lg-6'>
                      <i className='icon-diamond' />
                      <h4 className='title-skills'>Skills</h4>
                      {Skills.map((skill) => (
                        <Skill key={skill.id} {...skill} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className='col text-left border mx-1'>
                  <div>
                    <p className='about__content-text'>
                      Las tecnologias, herramientas y lenguajes que he podido
                      tocar durante este periodo de tiempo son
                    </p>
                    {Technologies.map((tech) => (
                      <Technoligie key={tech.id} {...tech} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div className='about__container'>
          <div className='about__content'>
            {' '}
            <h1>English</h1>
          </div>
        </div>
      );
    }
  }
}
const mapStateToprops = (state) => {
  return {
    langReducer: state.langReducer,
  };
};

export default connect(mapStateToprops, {})(About);
