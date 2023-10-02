import { useState, useEffect } from "react";
import "./Stopwatch.css";
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);
  return (
    <div className="Container">
      <div className="imgContainer">
        <img src="https://i.pinimg.com/originals/63/7a/5e/637a5e8ea8298fd6280f277419309ead.gif" />
      </div>
      <div className="stopwatch">
        <div className="container2">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="container2">
          <button onClick={() => setTimerOn(true)}>Start</button>
          <button onClick={() => setTimerOn(false)}>Stop</button>
          <button onClick={() => setTimerOn(true)}>Resume</button>
          <button onClick={() => setTime(0)}>Reset</button>{" "}
        </div>
      </div>
    </div>
  );
};
export default Stopwatch;
