import React from 'react';
import linkedinLogo from '../assets/statics/icons/linkedin-tile.svg';
import gitLogo from '../assets/statics/icons/github-tile.svg';
import twitterLogo from '../assets/statics/icons/twitter-official.svg';
import sourcererLogo from '../assets/statics/icons/sourcerer.png';
import '../assets/styles/components/Home.css';
import '../assets/styles/App.scss';

const Home = () => {
  return (
    <>
      <div className=' page home__container'>
        <div className='home__content'>
          <h1>Soy Jose Valero</h1>
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            laboriosam sit fugit dicta neque eligendi. Natus in illo amet beatae
            recusandae hic aliquam quos. Libero consequatur temporibus incidunt
            ipsa voluptatum!
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
              <img className='home__social-icon' src={gitLogo} alt='GitHub' />
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
};

export default Home;
