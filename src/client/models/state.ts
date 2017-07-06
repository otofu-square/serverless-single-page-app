import { Problem } from './problem';

export interface problemsState {
  problems: Array<Problem>;
}

export interface GlobalState {
  problems: problemsState;
  router: any;
}
