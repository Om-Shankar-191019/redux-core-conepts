import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slice/bonusSlice";
function Bonus() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  // const [points, setPoints] = useState({ value: 0 });

  // const increment = () => {
  //   setPoints({ value: points.value + 1 });
  // };
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point : ${points}</h3>

        <button onClick={() => dispatch(increment())}>Increment +</button>
      </div>
    </div>
  );
}

export default Bonus;
