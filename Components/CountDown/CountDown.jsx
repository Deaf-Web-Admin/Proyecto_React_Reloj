import React, { useState, useEffect } from "react";
import "./CountDown.css";
const Countdown = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    let countDownDate = new Date("September 29, 2023 14:30:00").getTime();
    let x = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
      if (distance < 0) {
        clearInterval(x);
        setTime("COUNTDOWN FINISHED");
      }
    }, 1000);
  }, []);
  return (
    <div className="Container">
      <div className="imgContainer">
        <img src="https://i.giphy.com/media/NAy2FD8xWrH4jUIBrq/giphy-downsized-large.gif" />
      </div>
      <div className="countdown">
        <h2>{time}</h2>
      </div>
    </div>
  );
};
export default Countdown;
