import { IProblem } from '../models/problem';

import { Reducer, Action } from 'redux';

export interface State {
  problems: Array<IProblem>;
}

interface IAction extends Action {
  type: string;
  payload: object;
}

const initialState: State = {
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

export const problemsReducer = (
  state: State = initialState,
  action: IAction,
) => {
  switch (action.type) {
    default:
      return state;
  }
};
