import {
  ActionTypes,
} from '../actions/HomeAction';

const initialState = {
  filterType: 0,
};

export default (state = initialState, action = {}) => {
  let nextState = Object.assign({}, state);

  // 日付選択のReducerを通す
  nextState = dateFilterReducer(nextState, action);

  return nextState || {};
}; 

// 日付範囲指定Reducer
const dateFilterReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case ActionTypes.CurrentMonth:
      state.filterType = 0;
      return state;

    case ActionTypes.LastMonth:
      state.filterType = 1;
      return state;

    case ActionTypes.CurrentYear:
      state.filterType = 2;
      return state;

    case ActionTypes.Last30Days:
      state.filterType = 3;
      return state;

    case ActionTypes.Last365Days:
      state.filterType = 4;
      return state;

    default:
      return state;
  }
}