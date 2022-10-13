import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions/index";

export const eighteenPercent = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.EIGHTEEN,
      payload: amount,
    });
  };
};

export const anyPercent = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.INPUTPERCENTAGE,
      payload: amount,
    });
  };
};

export const bankrupt = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT,
    });
  };
};

export const percentage = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT,
    });
  };
};
