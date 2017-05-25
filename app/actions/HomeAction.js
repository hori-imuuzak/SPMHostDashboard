export const ActionTypes = {
  // ホーム画面日付範囲指定アクション
  CurrentMonth: "CURRENT_MONTH",
  LastMonth: "LAST_MONTH",
  CurrentYear: "CURRENT_YEAR",
  Last30Days: "LAST_30DAYS",
  Last365Days: "LAST_365DAYS",

  // ホーム画面スペース変更アクション
  NextSpace: "NEXT_SPACE",
  PrevSpace: "PREV_SPACE",
  ScrollNextSpace: "SCROLL_NEXT_SPACE",
  ScrollPrevSpace: "SCROLL_PREV_SPACE",
};

export const doFilterCurrentMonth = () => {
  return {
    type: ActionTypes.CurrentMonth,
  };
}

export const doFilterLastMonth = () => {
  return {
    type: ActionTypes.LastMonth,
  };
}

export const doFilterCurrentYear = () => {
  return {
    type: ActionTypes.CurrentYear,
  };
}

export const doFilterLast30Days = () => {
  return {
    type: ActionTypes.Last30Days,
  };
}

export const doFilterLast365Days = () => {
  return {
    type: ActionTypes.Last365Days,
  };
}

export const showNextSpace = () => {
  return {
    type: ActionTypes.NextSpace,
  };
}

export const showPrevSpace = () => {
  return {
    type: ActionTypes.PrevSpace,
  };
}