import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeScreen from '../screens/HomeScreen';
import * as actions from '../actions/HomeAction';

const mapStateToProps = (state) => ({
  dateFilterType: state.home.filterType,
});

const mapActionToProps = (dispatch) => (
  bindActionCreators(actions, dispatch)
)

export default connect(mapStateToProps, mapActionToProps)(HomeScreen);