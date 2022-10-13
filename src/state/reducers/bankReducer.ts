import { Action } from "../actions";
import { ActionType } from "../action-types";
const initialState = {
  tip: 0,
};
const tipReducer = (state: number = initialState.tip, action: Action) => {
  switch (action.type) {
    case ActionType.EIGHTEEN:
      return (18 / 100) * action.payload;
    case ActionType.INPUTPERCENTAGE:
      return action.payload;
    case ActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default tipReducer;
