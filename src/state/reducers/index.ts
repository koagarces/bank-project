import { combineReducers } from "redux";
import tipReducer from "./bankReducer";
import percentReducer from "./percentReducer";

const reducers = combineReducers({
  tip: tipReducer,
  percent: percentReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
