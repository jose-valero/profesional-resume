import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../../assets/styles/components/Portafolio.scss';

const Project = ({ name, date, desc, repo, deploy }) => {
  return (
    <VerticalTimelineElement
      className='vertical-timeline-element--work'
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date={date}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<FontAwesomeIcon icon={faGithub} />}
    >
      <div className='fall-item fall-effect'>
        <img src='http://placeimg.com/260/260/nature/8/' alt='' />
        <div className='mask'>
          <h2>{name} </h2>
          <p>{desc}</p>
          <a href={deploy} className='btn btn-default'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={repo} className='btn btn-default'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default Project;
