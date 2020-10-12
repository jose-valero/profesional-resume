import React from 'react';
import { connect } from 'react-redux';
import School from './subComponents/School';
import { Educations } from './data/Data';
import CardDeck from 'react-bootstrap/CardDeck';
import '../assets/styles/App.scss';
import '../assets/styles/components/Formation.scss';

class Formation extends React.Component {
  render() {
    const langReducer = this.props.langReducer;
    if (langReducer === 'ES') {
      return (
        <>
          <div className='formation__container'>
            <div className='formation__title'>
              <h1>Formacion Profesional</h1>
            </div>
            <div className='formation__content row'>
              <CardDeck>
                {Educations.map((edu) => (
                  <School key={edu.id} {...edu} />
                ))}
              </CardDeck>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className='formation__container'>
            <div className='formation__title'>
              <h1>Formation</h1>
            </div>
            <div className='row formation__content'>
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

export default connect(mapStateToprops, {})(Formation);
