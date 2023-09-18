import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  fetchUserById,
} from "../slice/accountSlice";

function Account() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  // const [account, setAccount] = useState({ amount: 0 });
  const [value, setValue] = useState(0);

  // const increment = () => {
  //   setAccount({ amount: account.amount + 1 });
  // };

  // const decrement = () => {
  //   setAccount({ amount: account.amount - 1 });
  // };

  // const incrementByAmount = (value) => {
  //   setAccount({ amount: account.amount + value });
  // };

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount:${amount}</h3>
        <button onClick={() => dispatch(fetchUserById(1))}>
          fetchUser ById
        </button>
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(+e.target.value)}></input>
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Increment By {value} +
        </button>
      </div>
    </div>
  );
}

export default Account;
