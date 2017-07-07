import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { default as thunk } from 'redux-thunk';
import createHistory from 'history/createHashHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import appReducer from './reducers/app';
import problemPreviewReducer from './reducers/problemPreview';

export const history = createHistory();

const reducer = combineReducers({
  app: appReducer,
  problemPreview: problemPreviewReducer,
  router: <any>routerReducer,
});

const middleware = compose(
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(history)),
);

export const store = createStore(reducer, middleware);
