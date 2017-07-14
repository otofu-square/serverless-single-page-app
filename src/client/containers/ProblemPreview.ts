import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { match } from 'react-router-dom';

import { Problem, getProblemById } from '../models/problem';
import { GlobalState } from '../models/state';
import {
  updateTextarea,
  checkAnswer,
  nextProblem,
  IAction,
} from '../actions/problemPreview';
import ProblemPreview from '../pages/ProblemPreview';

interface ownProps {
  match: match<{ id: string }>;
}

const mapStateToProps = (state: GlobalState, ownProps: ownProps) => {
  const id = parseInt(ownProps.match.params.id);
  const problem = getProblemById(state.app.problems, id);
  return {
    id,
    description: problem.description,
    code: problem.code,
    textarea: state.problemPreview.textarea,
    message: state.problemPreview.message,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  onChangeTextarea: (text: string) => dispatch(updateTextarea(text)),
  onClick: (problem: Problem, answer: string) =>
    dispatch(checkAnswer(problem, answer)),
  nextProblem: (nextProblemId: number) => dispatch(nextProblem(nextProblemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProblemPreview);
