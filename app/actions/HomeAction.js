// ホーム画面日付範囲指定アクション
export const ActionTypes = {
  CurrentMonth: "CURRENT_MONTH",
  LastMonth: "LAST_MONTH",
  CurrentYear: "CURRENT_YEAR",
  Last30Days: "LAST_30DAYS",
  Last365Days: "LAST_365DAYS",
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