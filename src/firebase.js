import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyA_j0ml7crPtNzXu8aLqmk--aJ1SGtYoOM',
  authDomain: 'portafolio-contact-form.firebaseapp.com',
  databaseURL: 'https://portafolio-contact-form.firebaseio.com',
  projectId: 'portafolio-contact-form',
  storageBucket: 'portafolio-contact-form.appspot.com',
  messagingSenderId: '175258661639',
  appId: '1:175258661639:web:f3cebfe543437a1ae88ba2',
});

var db = firebaseApp.firestore();

export { db };
