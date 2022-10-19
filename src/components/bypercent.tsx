import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import "../styles/byPercentStyles.css";
import styled from "styled-components";
import tipReducer from "../state/reducers/bankReducer";

const TipPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const TipPercent = styled.input`
  /* background-color: black;
  color: white;
  border: none;
  text-align: center; */
  background-color: black;
  color: rgb(255, 255, 255);
  border: none;
  /* border-color: rgb(255, 255, 255); */
  /* border: border-box; */
  /* border-width: 2px; */
  text-align: center;
  font-size: 20px;
  padding: 0px;
  /* border-radius: 10%; */
  width: 100px;
  height: 150px;
`;

const InputsAndButtons = styled.h2`
  /* display: flex; */
  flex-direction: column;
`;

const TipInputs = styled.div`
  display: flex;
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

  useEffect(() => {
    submitTotal(answer, inputPercentage);
  });

  return (
    <form>
      <TipPage>
        <InputsAndButtons>
          <TipInputs>
            <div>
              <h3 className="aboveText">total</h3>
              <input
                className="tipBoxes"
                type="number"
                onChange={(total) => {
                  let newNum = parseInt(total.currentTarget.value);
                  setBill(newNum);
                }}
              />
            </div>
            <div>
              <h3 className="aboveText">%</h3>
              <TipPercent
                type="number"
                onChange={(perc) => {
                  let customPercent = parseInt(perc.currentTarget.value);
                  Percentage(customPercent);
                  handleCustom(bill);
                }}
              />
            </div>
            <div>
              <h3 className="aboveText">tip'em</h3>
              <span>
                <div className="tipBoxes">{amount.toFixed(2)}</div>
              </span>
            </div>
          </TipInputs>

          <div>
            {/* <button
              className="eightClass"
              type="submit"
              onClick={() => {
                submitTotal(bill, eighteen);
              }}
            >
              18%
            </button>
            <button
              className="customPercent"
              type="submit"
              onClick={(e) => {
                handleCustom(bill);
                submitTotal(answer, inputPercentage);
              }}
            >
              Caculate
            </button> */}
          </div>
        </InputsAndButtons>
      </TipPage>
    </form>
  );
};

export default ByPercent;
