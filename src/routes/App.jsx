import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={} />
          <Route exact path='/' component={} />
          <Route exact path='/' component={} />
          <Route exact path='/' component={} />
          <Route exact path='/' component={} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
