import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Formation from '../components/Formation';
import Home from '../components/Home';
import Spotify from '../components/Spotify';
import Layout from '../container/Layout';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={450} classNames='fade'>
              <Switch location={location}>
                <Route exact path='/' component={Home} />
                <Route exact path='/About' component={About} />
                <Route exact path='/formation' component={Formation} />
                <Route exact path='/experience' component={Experience} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/spotify' component={Spotify} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Layout>
  </BrowserRouter>
);

export default App;
