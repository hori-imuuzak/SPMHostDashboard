import {
  ActionTypes,
} from '../actions/HomeAction';

// 本当はここにデータ持つのは禁止
const mockSpace = [
  "すべてのスペース",
  "イケてるスペース",
  "哀愁のあるスペース",
];

const initialState = {
  filterType: 0,
  spaceName: mockSpace[0],
  spaceIndex: 0,
};

export default (state = initialState, action = {}) => {
  let nextState = Object.assign({}, state);

  // 日付選択のReducerを通す
  nextState = dateFilterReducer(nextState, action);

  // スペース変更のReducerを通す
  nextState = changeSpaceReducer(nextState, action);

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
};

// スペース変更Reducer
/**
 * memo
 * 本当ならスペース一覧をロードしてstateにセットしてというReducerがいるはずだがモックなので仮のState(Space)を返す
 */
const changeSpaceReducer = (state = {}, action = {}) => {
  let curSpaceIndex = state.spaceIndex;

  switch (action.type) {
    case ActionTypes.NextSpace:
      state.spaceName = mockSpace[++curSpaceIndex % mockSpace.length];
      curSpaceIndex = mockSpace.indexOf(state.spaceName);
      state.spaceIndex = curSpaceIndex;
      return state;

    case ActionTypes.PrevSpace:
      if (--curSpaceIndex < 0) curSpaceIndex = mockSpace.length - 1;
      state.spaceName = mockSpace[curSpaceIndex];
      curSpaceIndex = mockSpace.indexOf(state.spaceName);
      state.spaceIndex = curSpaceIndex;
      return state;

    case ActionTypes.ScrollNextSpace:
      state.spaceIndex = action.payload;
      state.spaceName = mockSpace[state.spaceIndex];
      return state;

    default:
      return state;
  }
};