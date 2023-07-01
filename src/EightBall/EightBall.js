import React, { useState } from "react";
import eightBallAnswers from "./eightBallAnswers";
import "./EightBall.css";

const randAnswer = () => {
  const idx = Math.floor(Math.random() * eightBallAnswers.length);
  return eightBallAnswers[idx];
};

const EightBall = () => {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  const [colorHistory, setColorHistory] = useState([0, 0, 0]);
  const updateColorHistory = (color) => {
    if (color === "red") {
      setColorHistory([colorHistory[0] + 1, colorHistory[1], colorHistory[2]]);
    } else if (color === "green") {
      setColorHistory([colorHistory[0], colorHistory[1] + 1, colorHistory[2]]);
    } else {
      setColorHistory([colorHistory[0], colorHistory[1], colorHistory[2] + 1]);
    }
  };
  const handleClick = (e) => {
    if (
      e.target === document.querySelector(".EightBall") ||
      e.target === document.querySelector(".EightBall-msg")
    ) {
      const answer = randAnswer();
      setColor(answer.color);
      setMsg(answer.msg);
      updateColorHistory(answer.color);
    }
  };
  const reset = () => {
    setColor("black");
    setMsg("Think of a Question");
    setColorHistory([0, 0, 0]);
  };
  return (
    <div
      style={{ backgroundColor: color }}
      onClick={handleClick}
      className="EightBall"
    >
      <h2 className="EightBall-ColorHistory">
        Red: {colorHistory[0]} &#160; Green: {colorHistory[1]} &#160; Yellow:{" "}
        {colorHistory[2]}
      </h2>
      <h3 className="EightBall-msg">{msg}</h3>
      <button onClick={reset} className="EightBall-Reset">
        Reset
      </button>
    </div>
  );
};

export default EightBall;
