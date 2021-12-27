import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter.value);
    return (
      <div>
        <h1>{counter}</h1>
      </div>
    );
};

export default Counter;