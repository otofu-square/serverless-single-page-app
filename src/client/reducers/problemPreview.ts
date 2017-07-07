import { problemPreviewState } from '../models/state';
import {
  CHECK_ANSWER_REQUEST,
  CHECK_ANSWER_FAILURE,
  CHECK_ANSWER_SUCCESS,
  IAction,
} from '../actions/problem';

const initialState: problemPreviewState = {
  problem: null,
  message: null,
};

const reducer = (
  state: problemPreviewState = initialState,
  action: IAction,
): problemPreviewState => {
  switch (action.type) {
    case CHECK_ANSWER_REQUEST:
      return state;
    case CHECK_ANSWER_FAILURE:
      return { ...state, message: action.payload.error };
    case CHECK_ANSWER_SUCCESS:
      return { ...state, message: 'Congratulation!!' };
    default:
      return state;
  }
};

export default reducer;
