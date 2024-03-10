import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  DecrementCounter,
  incrementCounter,
  ResetCounter,
} from "./Redux/Actions/Counter.action";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const HandleIncrement = () => {
    dispatch(incrementCounter());
  };

  const HandleDecrement = () => {
    dispatch(DecrementCounter());
  };

  const HandleReset = () => {
    dispatch(ResetCounter());
  };
  return (
    <div>
      <div className="main_body">
        <h1>React Redux with counter </h1>
        <p>count : {count} </p>
        <div className="allbtn">
          <button onClick={HandleIncrement}>Increment</button>
          <button onClick={HandleDecrement}>Decrement</button>
          <button onClick={HandleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;
