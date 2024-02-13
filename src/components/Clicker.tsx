import React, { useState } from "react";

export default function Clicker() {

  const [state, setState] = useState<number>(10);

  const handlerRight = (event:React.MouseEvent):void => {
    event.preventDefault();
    setState(state +1);
  }

  const handlerLeft = (event:React.MouseEvent):void => {
   setState(state - 1);
  }

  return (
    <div>
        <p>{state}</p>
        <button onClick={() => setState(state + 1)}>+</button>
        <button onClick={() => setState(state === 0? state:state - 1)}>-</button>
        <button onClick={handlerLeft} onContextMenu={handlerRight}>+/-</button>
    </div>
  )
}

// доработать процесс уменьшения
// число не должно становиться меньше 0