import { Action } from "../actions";
import { ActionType } from "../action-types";
const initialState = 0;

const bankReducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.EIGHTEEN:
      return (18 / 100) * action.payload;
    case ActionType.WITHDRAW:
      return state - action.payload;
    case ActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default bankReducer;
