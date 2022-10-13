import { Action } from "../actions";
import { ActionType } from "../action-types";
const initialState = {
  percent: 0,
};
const percentReducer = (
  state: number = initialState.percent,
  action: Action
) => {
  switch (action.type) {
    case ActionType.PERCENTAGE:
      return action.payload / 100;
    default:
      return state;
  }
};

export default percentReducer;
