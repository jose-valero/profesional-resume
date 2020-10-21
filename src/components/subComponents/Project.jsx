import React from 'react';
// import { Projects } from '../data/Data';
import '../../assets/styles/components/Portafolio.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = ({
  desc,
  date,
  name,
  tech,
  detalle_1,
  detalle_2,
  detalle_3,
  detalle_4,
  preview,
}) => {
  AOS.init();

  return (
    <div className='row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes'>
      <div
        className='col-10 col-md-5 order-3 order-md-1 timeline-content'
        data-aos='zoom-in'
      >
        <div className='artboard'>
          <div className='card'>
            <div className='card__side card__side--back'>
              <div className='card__cover'>
                <h4 className='card__heading'>
                  <span className='card__heading-span'>Puntos Relevantes</span>
                </h4>
              </div>
              <div className='card__details'>
                <ul>
                  <li>{detalle_1}</li>
                  <li>{detalle_2}</li>
                  <li>{detalle_3}</li>
                  <li>{detalle_4}</li>
                </ul>
              </div>
            </div>
            <>
              <div
                className='card__side card__side--front'
                style={{ backgroundImage: `url(${preview})` }}
              >
                <div className='card__theme'>
                  <div className='card__theme-box'>
                    <p className='card__subject'>{name}</p>
                    <p className='card__title'>{desc}</p>
                  </div>
                </div>
              </div>
            </>
            ,
          </div>
        </div>
      </div>
      <div className='col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center'>
        <img src={tech} className='img-fluid' alt='asd' data-aos='zoom-out' />
      </div>
      <div className='col-10 col-md-5 order-1 order-md-3 py-3 timeline-date'>
        <div className='d-block'>
          <small>
            <small>{date}</small>
            {/* <img src={tech} alt='' />
            <img src={tech} alt='' /> */}
          </small>
          {/* <img src={preview} alt='..' className='projects__preview' /> */}
        </div>
      </div>
    </div>
  );
};

export default Project;
