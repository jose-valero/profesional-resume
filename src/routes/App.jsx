import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Portafolio from '../components/Portafolio';
import Home from '../components/Home';
import Game from '../components/Game';
import Layout from '../container/Layout';
import "../assets/styles/App.scss"

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About} />
        <Route exact path='/education' component={Education} />
        <Route exact path='/portafolio' component={Portafolio} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/game' component={Game} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
