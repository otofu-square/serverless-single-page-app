import { repeat } from 'ramda';

import { appState } from '../models/state';
import {
  CHECK_ANSWER_REQUEST,
  CHECK_ANSWER_FAILURE,
  CHECK_ANSWER_SUCCESS,
  IAction,
} from '../actions/problem';

const initialState: appState = {
  problems: [
    {
      id: 1,
      description: 'What is truth?',
      code: 'function problem() { return __; }',
    },
    {
      id: 2,
      description: 'Simple Math',
      code: 'function problem() { return 42 === 6 * __; }',
    },
  ],
  solvedStatus: [],
};

const reducer = (state: appState = initialState, action: IAction): appState => {
  switch (action.type) {
    case CHECK_ANSWER_REQUEST:
      return state;
    case CHECK_ANSWER_FAILURE:
      return state;
    case CHECK_ANSWER_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default reducer;
