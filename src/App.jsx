import React from "react";
import { useState } from "react";
import "./App.css"

const App = () => {
  return(
    <>
    <div>
      <h1>Assignments</h1>
      <Problem1 />
    </div>
    </>
  )
}

const Problem1 = () => {
  const[count, setCount] = useState(0);
  function increment(){
    setCount(count + 1);
  }
  function decrement(){
    if(count > 0){
      setCount(count - 1);
    }
  }

  function reset(){
    setCount(0);
  }



  return(
    <>
      <div>
      <p>Count: {count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  )
}


export default App;