import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Problem } from '../models/problem';
import { GlobalState } from '../models/state';
import Index from '../pages/Index';

const mapStateToProps = (state: GlobalState) => ({
  problems: state.app.problems,
  solvedStatus: state.app.solvedStatus,
});

export default connect(mapStateToProps)(Index);
