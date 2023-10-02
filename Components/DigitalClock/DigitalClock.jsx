import React, { useEffect, useState } from "react";
import "./DigitalClock.css";
const DigitalClock = () => {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className="Container">
      <div className="imgContainer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/AnalogClockAnimation1_2hands_1h_in_6sec.gif/220px-AnalogClockAnimation1_2hands_1h_in_6sec.gif" />
      </div>
      <div className="digital-clock">
        <h2>{clockState}</h2>
      </div>
    </div>
  );
};
export default DigitalClock;
//https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/AnalogClockAnimation1_2hands_1h_in_6sec.gif/220px-AnalogClockAnimation1_2hands_1h_in_6sec.gif
//https://i.giphy.com/media/NAy2FD8xWrH4jUIBrq/giphy-downsized-large.gif
//https://i.pinimg.com/originals/63/7a/5e/637a5e8ea8298fd6280f277419309ead.gif
