import { ActionType } from "../action-types";

interface EighteenAction {
  type: ActionType.EIGHTEEN;
  payload: number;
}

interface InputPercentageAction {
  type: ActionType.INPUTPERCENTAGE;
  payload: number;
}

interface BankruptAction {
  type: ActionType.BANKRUPT;
}

interface PercentageAction {
  type: ActionType.PERCENTAGE;
  payload: number;
}

interface customTotal {
  type: ActionType.CUSTOMTOTAL;
  payload: number;
}
export type Action =
  | EighteenAction
  | InputPercentageAction
  | BankruptAction
  | PercentageAction;
