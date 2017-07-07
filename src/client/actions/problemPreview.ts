import { Dispatch } from 'redux';
import { compose, replace } from 'ramda';

import { Problem } from '../models/problem';

export const UPDATE_TEXTAREA = 'UPDATE_TEXTAREA';
export const CHECK_ANSWER_REQUEST = 'CHECK_ANSWER_REQUEST';
export const CHECK_ANSWER_FAILURE = 'CHECK_ANSWER_FAILURE';
export const CHECK_ANSWER_SUCCESS = 'CHECK_ANSWER_SUCCESS';

export interface IActions {
  UPDATE_TEXTAREA: {
    type: typeof UPDATE_TEXTAREA;
    payload: { textarea: string };
  };
  CHECK_ANSWER_REQUEST: { type: typeof CHECK_ANSWER_REQUEST };
  CHECK_ANSWER_FAILURE: {
    type: typeof CHECK_ANSWER_FAILURE;
    payload: { error: string };
  };
  CHECK_ANSWER_SUCCESS: {
    type: typeof CHECK_ANSWER_SUCCESS;
    payload: { problemId: number };
  };
}

export type IAction = IActions[keyof IActions];

export const updateTextarea = (textarea: string) => ({
  type: UPDATE_TEXTAREA as typeof UPDATE_TEXTAREA,
  payload: { textarea },
});

const checkAnswerRequest = () => ({
  type: CHECK_ANSWER_REQUEST as typeof CHECK_ANSWER_REQUEST,
});

const checkAnswerFailure = (error: string) => ({
  type: CHECK_ANSWER_FAILURE as typeof CHECK_ANSWER_FAILURE,
  payload: { error },
});

const checkAnswerSuccess = (problemId: number) => ({
  type: CHECK_ANSWER_SUCCESS as typeof CHECK_ANSWER_SUCCESS,
  payload: { problemId },
});

export const checkAnswer = (problem: Problem, answer: string) => async (
  dispatch: Dispatch<{}>,
) => {
  dispatch(checkAnswerRequest());
  const toImmediateFunc = (code: string) => `(${code})()`;
  const execCode = compose(eval, toImmediateFunc, replace('__', answer));
  if (execCode(problem.code)) {
    dispatch(checkAnswerSuccess(problem.id));
  } else {
    dispatch(checkAnswerFailure('Your answer is not correct.'));
  }
};
