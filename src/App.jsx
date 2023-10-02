import DigitalClock from "../Components/DigitalClock/DigitalClock";
import Countdown from "../Components/CountDown/CountDown";
import Stopwatch from "../Components/Stopwatch/Stopwatch";

import "./App.css";

const App = () => {
  return (
    <>
      <DigitalClock />
      <Countdown />
      <Stopwatch />
    </>
  );
};

export default App;
