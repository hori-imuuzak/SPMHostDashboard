import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import * as actions from '../actions/HomeAction';

const mapStateToProps = (state) => ({
  navigator: state.navigator,
});

export default connect(mapStateToProps)(Navigation);