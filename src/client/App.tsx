import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Index from './pages/Index';
import Problem from './pages/Problem';

const App = () =>
  <div className="markup">
    <div className="view-container container">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/problem/:id" component={Problem} />
        </Switch>
      </HashRouter>;
    </div>
  </div>;

export default App;
