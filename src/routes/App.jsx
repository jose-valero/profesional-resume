import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Portafolio from '../components/Portafolio';
import Home from '../components/Home';
import Layout from '../container/Layout';
import '../assets/styles/App.scss';
import NotFound from '../components/general/NotFound';
import Resumen from '../components/Resumen';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/education' component={Education} />
        <Route exact path='/portafolio' component={Portafolio} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/resumen' component={Resumen} />
        <Route path='/notFound' component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
