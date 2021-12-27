import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "../store/CounterSlice/CounterSlice.js";

const CounterActions = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment (+)</button>
      <button onClick={() => dispatch(decrement())}>Decrement (-)</button>
      <hr></hr>
      <input
        value={value}
        type="number"
        onChange={(e) => setValue(e.target.value)}
      />
      <br></br>
      <button onClick={() => dispatch(incrementByAmount(Number(value)))}>
        {value} increment
      </button>
      <button onClick={() => dispatch(decrementByAmount(Number(value)))}>
        {value} decrement
      </button>
    </div>
  );
};

export default CounterActions;
