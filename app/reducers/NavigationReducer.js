import { navigation } from '../components/Navigation';

const initState = navigation.router.getStateForAction(navigation.router.getActionForPathAndParams('Home'));

export const navigationReducer = (state = initState, action = {}) => {
	const nextState = navigation.router.getStateForAction(action, state);

	return nextState || state;
}