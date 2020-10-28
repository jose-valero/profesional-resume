import React from 'react';
import { connect } from 'react-redux';
import fotoPerfil from '../assets/statics/image/profile-foto-2.png';
import { Personal_Social } from './data/Data';
import Social from '../components/subComponents/Social';
import { Link } from 'react-router-dom';

import '../assets/styles/App.scss';
import '../assets/styles/components/Home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: 'loading' };
  }
  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  handleImageErrored() {
    this.setState({ imageStatus: 'failed to load' });
  }
  render() {
    const langReducer = this.props.langReducer;
    if (langReducer === 'ES') {
      return (
        <>
          <div
            className='home__container'
            onLoad={this.handleImageLoaded.bind(this)}
          >
            <div className='home__content'>
              <h1 className='home__content-title'>Hola, Soy José Valero</h1>
              <img
                className='home__fotoPerfil'
                src={fotoPerfil}
                alt='foto-perfil'
                rel='preload'
                as='image'
              />

              <div className='home__social'>
                {Personal_Social.map((rs) => (
                  <Social key={rs.id} {...rs} />
                ))}
              </div>
              <h3 className='home__content-text'>
                Estudiante y <b>Frontend Developer</b> viviendo en Buenos Aires
                Argentina, A continuación, vera un poco mi portafolio y
                aprenderán algunas cosas acerca de mí, y también demostrando un
                poco mis habilidades con diferentes tecnologías
                <strong>
                  <Link to='/about'> Conóceme</Link>
                </strong>
              </h3>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div
            className='home__container'
            onLoad={this.handleImageLoaded.bind(this)}
          >
            <div className='home__content'>
              <h1 className='home__content-title'>H1, I Am Jose Valero</h1>
              <img
                className='home__fotoPerfil'
                src={fotoPerfil}
                alt='foto-perfil'
                rel='preload'
                as='image'
              />

              <div className='home__social'>
                {Personal_Social.map((rs) => (
                  <Social key={rs.id} {...rs} />
                ))}
              </div>
              <h3 className='home__content-text'>
                Student and <b>Frontend Developer</b> living in Buenos Aires
                Argentina, Below you will see a little bit of my portfolio and
                learn some things about me, Page created from a Frontend for
                programmers and Recruiters
                <strong>
                  <Link to='/about'> Know more About me</Link>
                </strong>
              </h3>
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
