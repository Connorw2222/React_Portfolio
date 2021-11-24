import React, { useState } from "react";

const Counter = () => {
  
  const [ counter, setCounter ] = useState(0)

  return(
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => {setCounter(counter + 1)}}>
        Click Me!
      </button>
      <button onClick={() => {setCounter(counter - 1)}}>
        Don't Click Me!
      </button>
    </div>
  )
}

export default Counter;