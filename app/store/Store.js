import { createStore, combineReducers } from 'redux';
import { navigation } from '../components/Navigation';

import { navigationReducer } from '../reducers/NavigationReducer';

const initialState = {};

const store = createStore(
	combineReducers({
		navigation: navigationReducer,
	}, initialState)
)

export default store;