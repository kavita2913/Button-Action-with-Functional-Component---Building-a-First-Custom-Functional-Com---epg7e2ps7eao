import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [hide, sethide] = useState(false);
  const buttonClick = () => {
    const newHide = !hide;
    sethide(newHide);
  };

  return (
    <div id="main">
      <button id="click" onClick={buttonClick}> click me </button>
      {hide === true ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
