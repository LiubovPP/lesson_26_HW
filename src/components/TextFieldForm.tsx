import React, { useState } from 'react';

const TextFieldForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="textField">Введите текст:</label>
      <input
        type="text"
        id="textField"
        value={inputValue}
        onChange={handleChange}
      />
      <p>Введенное значение: {inputValue}</p>
    </div>
  );
};

export default TextFieldForm;