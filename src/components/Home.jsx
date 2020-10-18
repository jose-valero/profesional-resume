import React from 'react';
import { connect } from 'react-redux';
import fotoPerfil from '../assets/statics/image/profile-foto-2.png';
import { Personal_Social } from './data/Data';
import Social from '../components/subComponents/Social';
import { Link } from 'react-router-dom';

import '../assets/styles/App.scss';
import '../assets/styles/components/Home.scss';

class Home extends React.Component {
  render() {
    const langReducer = this.props.langReducer;
    if (langReducer === 'ES') {
      return (
        <>
          <div className='home__container'>
            <div className='home__content'>
              <h1 className='home__content-title'>Hola, Soy José Valero</h1>
              <img
                className='home__fotoPerfil'
                src={fotoPerfil}
                alt='foto-perfil'
              />

              <h3 className='home__content-text text-center'>
                Estudiante y <b>Frontend Developer</b> viviendo en Buenos Aires
                Argentina, A continuacion vera un poco mi portafolio y
                aprenderan algunas cosas acerca de mi, y tambien demostrando un
                poco mis habilidades con diferentes tecnologias{' '}
                <strong>
                  <Link to='/about'>Conóceme</Link>
                </strong>
              </h3>
              <div className='home__social '>
                {Personal_Social.map((rs) => (
                  <Social key={rs.id} {...rs} />
                ))}
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className=' page home__container'>
            <div className='home__content'>
              <h1 className='home__content-tittle text-center mb-5 pb-5'>
                Hi, I'm José Valero
              </h1>
              <img
                className='home__fotoPerfil'
                src={fotoPerfil}
                alt='foto-perfil'
              />

              <h3 className='home__content-text text-center'>
                Student and <b>Frontend Developer</b> living in Buenos Aires
                Argentina, Below you will see a little bit of my portfolio and
                learn some things about me, Page created from a Frontend for
                programmers and Recruiters
              </h3>
              <div className='home__social d-flex justify-content-center'>
                {Personal_Social.map((rs) => (
                  <Social key={rs.id} {...rs} />
                ))}
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    langReducer: state.langReducer,
  };
};

export default connect(mapStateToProps, {})(Home);
