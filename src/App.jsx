import React from "react";
import Counter from "./Counter";
import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Counter" : "Show Counter"}
      </button>
      {show && <Counter />}
    </div>
  );
};

export default App;