import { connect } from 'react-redux';
import { navigation } from '../components/Navigation';

const mapStateToProps = (state) => ({
	navigator: state.navigator,
});

export const NavigationContainer = connect(mapStateToProps)(navigation);