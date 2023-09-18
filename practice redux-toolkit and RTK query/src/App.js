import "./App.css";
import { useState } from "react";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { useSelector } from "react-redux";
import Admin from "./components/Admin";
function App() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount : {amount}</h3>
      <h3>Total Bonus :{points} </h3>

      <Account></Account>
      <Bonus></Bonus>
      <Admin />
    </div>
  );
}

export default App;
