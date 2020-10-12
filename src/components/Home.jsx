import React from 'react';
import { connect } from 'react-redux';
import gitLogo from '../assets/statics/icons/github-tile.svg';
import linkedinLogo from '../assets/statics/icons/linkedin-tile.svg';
import twitterLogo from '../assets/statics/icons/twitter-official.svg';
import sourcererLogo from '../assets/statics/icons/icon-sourcerer.png';
import fotoPerfil from '../assets/statics/image/profile-foto-2.png';
import '../assets/styles/components/Home.css';
import '../assets/styles/App.scss';
import { Personal_Social } from './data/Data';
import Social from '../components/subComponents/Social';

class Home extends React.Component {
  render() {
    const langReducer = this.props.langReducer;
    if (langReducer === 'ES') {
      return (
        <>
          <div className='home__container'>
            <div className='home__content'>
              <h1 className='home__content-tittle text-center mb-5 pb-5'>
                Hola, Soy José Valero
              </h1>
              <img
                className='home__fotoPerfil'
                src={fotoPerfil}
                alt='foto-perfil'
              />

              <h3 className='home__content-text text-center'>
                Estudiante y <b>Frontend Developer</b> viviendo en Buenos Aires
                Argentina, me gusta aprender de nuevas tecnologias, navego entre
                el desarrollo Frontend o simplemente jugar algunos video juegos
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
                Argentina, I like to learn about new technologies, I navigate
                between Frontend development or just play some video games.
              </h3>
              <div className='home__social d-flex justify-content-center'>
                <a
                  href='https://www.linkedin.com/in/josemiguelvalero/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    className='home__social-icon'
                    src={linkedinLogo}
                    alt='Linkedin'
                  />
                </a>
                <a
                  href='https://github.com/jose-valero'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    className='home__social-icon'
                    src={gitLogo}
                    alt='GitHub'
                  />
                </a>
                <a
                  href='https://twitter.com/JMiguelValero'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    className='home__social-icon'
                    src={twitterLogo}
                    alt='Twitter'
                  />
                </a>
                <a
                  href='https://sourcerer.io/jose-valero'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    className='home__social-icon'
                    src={sourcererLogo}
                    alt='sourcerer'
                  />
                </a>
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
