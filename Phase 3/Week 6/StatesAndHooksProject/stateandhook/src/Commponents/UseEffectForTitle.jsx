import React, { useEffect, useState } from "react";
import '../assets/CSS/Use.css';

const UseEffectForTitle = () => {
  const [Counter, setCount] = useState(0);
  useEffect(() => {
    alert("Componet is mounted!");
  }, []);//[] Dependancy arre empty its apper when the component is mounted 
  useEffect(() => {
   
    document.title = `Titlecount  ${Counter}`;
  }, [Counter]);//Dependancy arre title change 

  return (
    <div className="use">
      <p>Message: {Counter}</p>
      <button className="change" onClick={() => setCount((chenge) => (chenge += 1))}>
        Change
      </button>
    </div>
  );
};

export default UseEffectForTitle;
