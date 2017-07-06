import { connect } from 'react-redux';
import { match } from 'react-router-dom';

import { GlobalState } from '../models/state';
import ProblemDetail from '../pages/ProblemDetail';

interface ownProps {
  match: match<{ id: number }>;
}

const mapStateToProps = (state: GlobalState, ownProps: ownProps) => ({
  id: ownProps.match.params.id,
  description:
    state.problems.problems[ownProps.match.params.id - 1].description,
  code: state.problems.problems[ownProps.match.params.id - 1].code,
});

export default connect(mapStateToProps, () => ({}))(ProblemDetail);
