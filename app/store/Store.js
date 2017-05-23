import {
	createStore,
	combineReducers,
	applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import navigationReducer from '../reducers/NavigationReducer';
import homeReducer from '../reducers/HomeReducer';

const initialState = {};

export default store = createStore(
	combineReducers({
		navigation: navigationReducer,
		home: homeReducer,
	}, initialState),
	applyMiddleware(logger)
)