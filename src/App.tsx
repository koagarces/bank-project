import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";
import ByPercent from "./components/bypercent";
import styled from "styled-components";

//styles
const SiteName = styled.div`
  color: White;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 5rem;
  margin: 0;
  margin-top: 10%;
`;

const App: React.FC = () => {
  //Redux Tools
  const dispatch = useDispatch();
  const amount = useSelector((state: State) => state.tip);
  const { eighteen, inputPercentage, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    console.log("amount changed");
  }, [amount]);
  return (
    <div className="App">
      <SiteName>tip'em</SiteName>

      <ByPercent />
    </div>
  );
};

export default App;
