import { problemPreviewState } from '../models/state';
import {
  UPDATE_TEXTAREA,
  RESET_PREVIEW,
  CHECK_ANSWER_REQUEST,
  CHECK_ANSWER_FAILURE,
  CHECK_ANSWER_SUCCESS,
  IAction,
} from '../actions/problemPreview';

const initialState: problemPreviewState = {
  textarea: '',
  message: '',
};

const reducer = (
  state: problemPreviewState = initialState,
  action: IAction,
): problemPreviewState => {
  switch (action.type) {
    case UPDATE_TEXTAREA:
      return { ...state, textarea: action.payload.textarea };
    case RESET_PREVIEW:
      return { textarea: '', message: '' };
    case CHECK_ANSWER_REQUEST:
      return { ...state, message: 'Checking...' };
    case CHECK_ANSWER_FAILURE:
      return { ...state, message: action.payload.error };
    case CHECK_ANSWER_SUCCESS:
      return { ...state, message: 'Congratulation!!' };
    default:
      return state;
  }
};

export default reducer;
