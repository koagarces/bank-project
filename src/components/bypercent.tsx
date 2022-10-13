import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import "../styles/byPercentStyles.css";
import styled from "styled-components";

const TipInputs = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const ByPercent = () => {
  let count = 0;
  const [bill, setBill] = useState<number>(0);
  const [answer, setAnswer] = useState<number>(0);
  const dispatch = useDispatch();
  const percent = useSelector((state: State) => state.percent);
  const amount = useSelector((state: State) => state.tip);
  const { eighteen, inputPercentage, Percentage } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleCustom = (total: number) => {
    console.log(percent * total);
    setAnswer(percent * total);
    console.log(answer);
    count = 0;
  };
  const submitTotal = (num: number, tip: Function) => {
    console.log(num);
    console.log(tip(num));
    tip(num);
    count = 0;
    console.log(answer);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TipInputs>
        <input
          className="tipBoxes"
          type="number"
          placeholder="Bill Total"
          onChange={(total) => {
            let newNum = parseInt(total.currentTarget.value);
            setBill(newNum);
          }}
        />

        <button
          className="eightClass"
          type="submit"
          onClick={() => {
            submitTotal(bill, eighteen);
          }}
        >
          18%
        </button>
        <h2>{amount.toFixed(2)}</h2>
        <input
          className="tipBoxes"
          type="number"
          placeholder="Percentage"
          onChange={(perc) => {
            let customPercent = parseInt(perc.currentTarget.value);
            Percentage(customPercent);
          }}
        />
        <button
          className="customPercent"
          type="submit"
          onClick={(e) => {
            handleCustom(bill);
            submitTotal(answer, inputPercentage);
          }}
        >
          CLICK
        </button>
      </TipInputs>
    </form>
  );
};

export default ByPercent;
