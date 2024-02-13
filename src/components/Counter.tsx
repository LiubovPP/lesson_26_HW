// task1
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const double = () => {
    setCount(count * 2);
  };

  return (
    <div>
      <p>Текущее значение счетчика: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Обнулить</button>
      <button onClick={double}>x2</button>
    </div>
  );
};

export default Counter;