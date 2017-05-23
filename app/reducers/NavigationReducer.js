import navigation from '../components/Navigation';

const initialState = navigation.router.getStateForAction(navigation.router.getActionForPathAndParams('Home'));

export default (state = initialState, action = {}) => {
	const nextState = navigation.router.getStateForAction(action, state);

	return nextState || state;
}