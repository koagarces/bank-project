import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const eighteen = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.EIGHTEEN,
      payload: amount,
    });
  };
};

export const inputPercentage = (amount: number) => {
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

export const Percentage = (percent: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.PERCENTAGE,
      payload: percent,
    });
  };
};
