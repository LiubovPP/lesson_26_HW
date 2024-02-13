import React, { useState } from 'react';

const CounterWithStep = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount(prevCount => prevCount + step);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - step);
  };

  const reset = () => {
    setCount(0);
  };

  const double = () => {
    setCount(prevCount => prevCount * 2);
  };

  const changeStep = (newStep: React.SetStateAction<number>) => {
    setStep(newStep);
  };

  return (
    <div>
      <p>Текущее значение счетчика: {count}</p>
      <p>Шаг счетчика: {step}</p>
      <button onClick={increment}>+{step}</button>
      <button onClick={decrement}>-{step}</button>
      <button onClick={reset}>Обнулить</button>
      <button onClick={double}>x2</button>
      <input
        type="number"
        value={step}
        onChange={e => changeStep(parseInt(e.target.value, 10))}
      />
    </div>
  );
};

export default CounterWithStep;
