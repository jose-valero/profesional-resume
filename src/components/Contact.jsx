import React, { useState } from 'react';
import { connect } from 'react-redux';

import '../assets/styles/components/Contact.scss';
import { db } from '../firebase';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection('contacts')
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert('Your message has been submitted👍');
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName('');
    setEmail('');
    setMessage('');
  };

  AOS.init();
  const langReducer = props.langReducer;
  if (langReducer === 'ES') {
    return (
      <div className='form__container'>
        <div className='contact__hero'>
          <h1>Contactame</h1>
        </div>
        <form
          className='contact__container--form'
          onSubmit={handleSubmit}
          data-aos='zoom-in-down'
          data-aos-offset='300'
          data-aos-easing='ease-in-sine'
        >
          <h1>
            Escribeme{' '}
            <span role='img' aria-label=''>
              📲
            </span>
          </h1>

          <label>Nombre</label>
          <input
            placeholder='Thanos'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Mensaje</label>
          <textarea
            placeholder='Im Inevitable'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            type='submit'
            style={{ background: loader ? '$light-gray' : '$mid-blue' }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className='form__container'>
        <div className='contact__hero'>
          <h1>Lets Talk</h1>
        </div>
        <form className='contact__container--form' onSubmit={handleSubmit}>
          <h1>
            Text me{' '}
            <span role='img' aria-label=''>
              📲
            </span>
          </h1>

          <label>Name</label>
          <input
            placeholder='Tony Stark'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Message</label>
          <textarea
            placeholder='Im IronMan'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            type='submit'
            style={{ background: loader ? '$light-gray' : '$mid-blue' }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
};

const mapStateToprops = (state) => {
  return {
    langReducer: state.langReducer,
  };
};

export default connect(mapStateToprops, {})(Contact);
