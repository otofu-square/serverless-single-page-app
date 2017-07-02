import * as React from 'react';
import { createStore, Reducer } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Index from './pages/Index';
import Problem from './containers/problem';
import { problemsReducer } from './reducers/problems';

const store = createStore(problemsReducer as any);

const App = () =>
  <Provider store={store}>
    <div className="markup">
      <div className="view-container container">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/problem/:id" component={Problem as any} />
          </Switch>
        </HashRouter>;
      </div>
    </div>;
  </Provider>;

export default App;
