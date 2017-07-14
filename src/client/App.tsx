import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createHashHistory';

import Index from './containers/Index';
import Problem from './containers/ProblemPreview';
import Toolbar from './components/Toolbar';
import { history } from './store';

const App = () =>
  <ConnectedRouter history={history}>
    <div className="markup">
      <Toolbar />
      <div className="view-container container">
        <Switch>
          <Route exact path="/" component={Index as any} />
          <Route path="/problem/:id" component={Problem as any} />
        </Switch>
      </div>
    </div>
  </ConnectedRouter>;

export default App;
