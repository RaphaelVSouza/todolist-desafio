import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Todos from '../pages/Todos';

function Routes() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todos" exact component={Todos} />
        </Switch>
    </Router>
  )
}

export default Routes;