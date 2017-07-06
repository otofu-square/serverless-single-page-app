import { problemsState } from '../models/state';

import { Reducer, Action } from 'redux';

const initialState: problemsState = {
  problems: [
    {
      description: 'What is truth?',
      code: 'function problem() { return __; }',
    },
    {
      description: 'Simple Math',
      code: 'function problem() { return 42 === 6 * __; }',
    },
  ],
};

const reducer = (
  state: problemsState = initialState,
  action: Action,
): problemsState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
