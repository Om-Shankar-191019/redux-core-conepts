import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../reducers/reward";
function Reward() {
  const points = useSelector((state) => state.reward.points);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>reward Component</b>
        </h4>
        <h3>Total Point : ${points}</h3>

        <button onClick={() => dispatch(increment())}>Increment +</button>
      </div>
    </div>
  );
}

export default Reward;
