import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";

const ByPercent = () => {
  const dispatch = useDispatch();
  const amount = useSelector((state: State) => state.bank);
  const { eighteen, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <form
      onSubmit={(e) => {
        console.log(eighteen(e.currentTarget.value));
        eighteen(e.currentTarget.value);
        e.preventDefault();
      }}
    >
      <input type="number" />
      <button className="eightClass" type="submit">
        18%
      </button>
    </form>
  );
};

export default ByPercent;
