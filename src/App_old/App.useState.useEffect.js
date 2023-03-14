import React from "react";
import { useEffect, useState } from "react";

const title = document.querySelector("title");
title.innerHTML = "Module 3";

function Log() {
  useEffect(() => {
    const timer = setInterval(() => console.log("Timer is running"), 1000);
    return () => clearInterval(timer); // This is the cleanup function to stop the interval once the component is unmounted
  }, []);
  return <div>TIMER IS RUNNING</div>;
}

function App() {
  const [isActive, setIsActive] = useState(false);
  const [showLog, setShowLog] = useState(true);

  function onClick() {
    setIsActive(!isActive);
  }

  return (
    <div>
      <h1>TEST</h1>
      <div>{isActive === true ? "I am active" : "I am not active"}</div>
      <button onClick={onClick}>Click me</button>
      <br />
      <br />
      {showLog === true ? <Log /> : null}
      <button
        onClick={() => {
          showLog === true ? setShowLog(false) : setShowLog(true);
        }}
      ></button>
    </div>
  );
}

export default App;
