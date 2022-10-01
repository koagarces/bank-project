import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";
import ByPercent from "./components/bypercent";

function App() {
  const dispatch = useDispatch();
  const amount = useSelector((state: State) => state.bank);

  const { eighteen, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div className="App">
      <h1>{amount}</h1>
      <ByPercent />
      {/* <button onClick={() => eighteen()}>Deposit</button> */}
      {/* <button onClick={() => withdrawMoney(500)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt!</button> */}
    </div>
  );
}

export default App;
