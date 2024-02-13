import React, { useState } from 'react';

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Скрыть текст' : 'Показать текст'}
      </button>
      {isVisible && <p>Текст, который может быть скрыт или отображен.</p>}
    </div>
  );
};

export default ToggleText;