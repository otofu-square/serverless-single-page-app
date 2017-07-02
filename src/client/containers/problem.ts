import { connect } from 'react-redux';

import { State } from '../reducers/problems';
import { Problem, Props } from '../pages/Problem';

const mapStateToProps = (state: State, ownProps: any): Props => ({
  id: ownProps.params.id,
  description: state.problems[ownProps.params.id - 1].description,
  code: state.problems[ownProps.params.id - 1].code,
});

export default connect(mapStateToProps)(Problem);
