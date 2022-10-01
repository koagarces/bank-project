import { ActionType } from "../action-types";

interface EighteenAction {
  type: ActionType.EIGHTEEN;
  payload: number;
}

interface WithdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}

interface BankruptAction {
  type: ActionType.BANKRUPT;
}

export type Action = EighteenAction | WithdrawAction | BankruptAction;
