import React, { useState } from "react";

const App = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [count, setCount] = useState(0);

  function handleClick() {
    // Only increment count when changing from false ➝ true (unliked ➝ liked)
    if (!isToggle) {
      setCount(count + 1);
    }
    setIsToggle(!isToggle);
  }

  return (
    <>
      <button onClick={handleClick}>
        {isToggle ? "❤️ Liked" : "👍 Like"}
      </button>

      <p>
        {isToggle
          ? "You liked this post"
          : "You have not liked this post"}
      </p>

      <p>You liked this post {count} {count === 1 ? "time" : "times"}</p>
    </>
  );
};

export default App;
