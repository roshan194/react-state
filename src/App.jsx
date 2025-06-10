import React from "react";
import { useState } from "react";
import "./App.css"

const App = () => {
  const[count, setCount] = useState(0);
  function handle() {
    setCount(count+1);
  }
  function clear(){
    setCount(0);
  }
  return(
    <>
    <div>
      <h1>Counters that update together</h1>
      <Mybutton count = {count} onClick = {handle} />
      <Mybutton count = {count} onClick = {handle} />
    </div>
    <button onClick={clear}>clear</button>
    </>
  )
}

const Mybutton = ({count, onClick}) => {

  return(
    <div>
      <button onClick={onClick}>You have Clicked {count} times</button>
    </div>
  )
}

export default App;