import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { default as thunk } from 'redux-thunk';
import createHistory from 'history/createHashHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import problemsReducer from './reducers/problems';

const reducer = combineReducers({
  problems: problemsReducer,
  router: <any>routerReducer,
});

export const history = createHistory();
export const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), applyMiddleware(routerMiddleware(history))),
);
