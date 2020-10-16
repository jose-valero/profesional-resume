import React from 'react';
import { connect } from 'react-redux';
import Hobbie from './subComponents/Hobbie';
import HobbieEN from './subComponents/HobbieEN';
import Skill from './subComponents/Skill';
import Technoligie from './subComponents/Technoligie';
import { Skills, Technologies, Hobbies } from './data/Data';
import CardGroup from 'react-bootstrap/CardGroup';

import '../assets/styles/components/About.scss';
import '../assets/styles/subComponents/Technologie.scss';
import '../assets/styles/subComponents/Skill.scss';
import '../assets/styles/subComponents/Hobbie.scss';
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
          <div
            className='about__container'
            data-aos='fade-down'
            data-aos-easing="linear"
            data-aos-duration="650"
          >
            <CardGroup className='about__cardGroup'>
              {Hobbies.map((hobbi) => (
                <Hobbie key={hobbi.id} {...hobbi} />
              ))}
            </CardGroup>
            <div className='about__content'>
              <div className='row about__content-text m-3'>
                <p>
                  Desde ya un año me comprometí a realizar un cambio rotundo
                  hacia el mundo de la Programación y Desarrollo, Me considero
                  un asiduo estudiante y un profesional comprometido..
                  apasionado con nuevas tecnologías y con miras a convertirme en
                  FullStack Developer, y por que no? Algún día dirigir grandes
                  proyectos.
                </p>
              </div>

              <div className='about__content-skills row'>
                <div className='col-12 col-md-6 col-lg-6 my-2'>
                  <div className='col-12 col-md col-lg-8'>
                    <h4 className='about__title-skills'>Skills</h4>
                    {Skills.map((skill) => (
                      <Skill key={skill.id} {...skill} />
                    ))}
                  </div>
                </div>

                <div className='col-12 col-md-6 col-lg-6 d-flex my-4'>
                  <div className='about__tech-container'>
                    <p className='about__tech-title'>
                      Tecnologias y herramientas
                    </p>
                    {Technologies.map((tech) => (
                      <Technoligie key={tech.id} {...tech} className='' />
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
        <>
          <div className='about__container'>
            <CardGroup className='about__cardGroup'>
              {Hobbies.map((hobbi) => (
                <HobbieEN key={hobbi.id} {...hobbi} />
              ))}
            </CardGroup>
            <div className='about__content'>
              <div className='row about__content-text m-3'>
                <p>
                  One year ago, I committed myself to making a complete change
                  to the world of Programming and Development, I consider myself
                  a regular student and a committed professional. passionate
                  about new technologies and looking to become FullStack
                  Developer, and why not? Someday be able to manage major
                  projects.
                </p>
              </div>

              <div className='about__content-skills row'>
                <div className='col-12 col-md-6 col-lg-6 my-2'>
                  <div className='col-12 col-md col-lg-8'>
                    <h4 className='about__title-skills'>Skills</h4>
                    {Skills.map((skill) => (
                      <Skill key={skill.id} {...skill} />
                    ))}
                  </div>
                </div>

                <div className='col-12 col-md-6 col-lg-6 d-flex my-4'>
                  <div className='about__tech-container'>
                    <p className='about__tech-title'>Tools and Technologies</p>
                    {Technologies.map((tech) => (
                      <Technoligie key={tech.id} {...tech} className='' />
                    ))}
                  </div>
                </div>
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

export default connect(mapStateToprops, {})(About);
