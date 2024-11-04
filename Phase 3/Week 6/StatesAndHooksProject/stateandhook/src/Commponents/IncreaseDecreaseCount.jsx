import React, { useState } from "react";
import "../assets/CSS/Incresed.css";

const IncreaseDecreaseCount = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="Inc">
      <p>initial count:    {count} </p>
      <button
        onClick={() => {
          setCount((Counter) => (Counter = 0));
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setCount((Counter) => (Counter += 1));
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((Counter) => (Counter -= 1));
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default IncreaseDecreaseCount;
