import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../assets/statics/image/notFound.svg';

import '../../assets/styles/components/NotFound.scss';

function NotFound() {
  return (
    <>
      <div className='notFound__container'>
        <div className='notFound__container'>
          <div className='notFound__row'>
            <div className='notFound__content notFound__col '>
              <h1 className='notFound__title'>Ooops.. Pagina no encontrada</h1>
              <h1 className='notFound__content-text'>Intente luego</h1>
              <Link to='/'>
                <button className='notFound__button '>
                  Go Home
                </button>
              </Link>
            </div>
            <div className='notFound__content notFound__col'>
              <img
                className='notFound__img'
                src={notFoundImg}
                alt='img_notfound'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
