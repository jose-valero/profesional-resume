import React, { useState } from 'react';
import '../assets/styles/components/Contact.scss';
import { db } from '../firebase';

const Contact = () => {
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

  return (
    <div className='form__container'>
      <div className='contact__hero'>
        <h1>Lets Talk</h1>
      </div>
      <form className='contact__container--form' onSubmit={handleSubmit}>
        <h1>
          Contactame{' '}
          <span role='img' aria-label=''>
            📲
          </span>
        </h1>

        <label>Name</label>
        <input
          placeholder='Name'
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
          placeholder='Message'
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
};

export default Contact;
