import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Layout from '../container/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={About} />
      </Switch>
      <Contact />
    </Layout>
  </BrowserRouter>
);

export default App;
