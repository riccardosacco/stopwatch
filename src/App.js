import React, { useState, useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [isOn, setIsOn] = useState(false);
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(0);
  const [lastLap, setLastLap] = useState(0);
  const [laps, setLaps] = useState([]);

  const countRef = useRef(null);

  const handleStart = () => {
    setIsOn(true);
    setStart(Date.now());

    setLastLap(Date.now());

    countRef.current = setInterval(() => {
      setTimer(Date.now());
    }, 1);
  };

  const handleLap = () => {
    setLaps([...laps, formatTime(timer - lastLap)]);
    setLastLap(Date.now());
  };

  const handleStop = () => {
    clearInterval(countRef.current);
    setIsOn(false);
  };

  const handleReset = () => {
    setStart(0);
    setTimer(0);
    setLastLap(0);
    clearInterval(countRef.current);
    setIsOn(false);
    setLaps([]);
  };

  const formatTime = (time) => {
    return (time / 1000).toString().replace(".", ",");
  };

  return (
    <div className="app">
      <nav class="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">
            Gambling Stopwatch
          </a>
        </div>
      </nav>
      <div className="container">
        <p className="h1">{formatTime(timer - start)}</p>
        <div className="buttons d-flex" style={{ gap: 10 }}>
          {isOn === false ? (
            <button className="btn btn-primary btn-lg" onClick={handleStart}>
              Start
            </button>
          ) : (
            <button className="btn btn-success btn-lg" onClick={handleLap}>
              Lap
            </button>
          )}

          <button className="btn btn-danger btn-lg" onClick={handleStop}>
            Stop
          </button>
          <button className="btn btn-warning btn-lg" onClick={handleReset}>
            Reset
          </button>
        </div>
        <table className="table table-sm mt-2" style={{ maxWidth: 150 }}>
          <thead>
            <tr>
              <th>Lap</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {laps.map((lap, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{lap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 1 - 0,989
// 2 - 1,266

export default App;
