import React, { useState, useRef, useEffect } from "react";
import Papa from "papaparse";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.csv";

const App = () => {
  const [isOn, setIsOn] = useState(false);
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(0);
  const [lastLap, setLastLap] = useState(0);
  const [laps, setLaps] = useState([]);
  const [predictions, setPredictions] = useState([]);

  const countRef = useRef(null);

  useEffect(() => {
    // Load the CSV file on component mount
    Papa.parse(data, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const parsedData = result.data.map((row) => ({
          T: parseFloat(row.T),
          B: parseInt(row.B),
        }));
        setPredictions(parsedData);
      },
    });
  }, []);

  const handleStart = () => {
    setIsOn(true);
    setStart(Date.now());
    setLastLap(Date.now());

    countRef.current = setInterval(() => {
      setTimer(Date.now());
    }, 1);
  };

  const handleLap = () => {
    setLaps([...laps, { time: timer - lastLap, prediction: getPrediction(timer - lastLap) }]);
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

  const getPrediction = (time) => {
    const formattedTime = parseFloat((time / 1000).toFixed(3));
    const match = predictions.find((p) => p.T === formattedTime);
    return match ? match.B : null;
  };

  const formatTime = (time) => {
    return (time / 1000).toFixed(3).replace(".", ",");
  };

  return (
    <div className="app">
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
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
        <table className="table table-sm mt-2" style={{ maxWidth: 250 }}>
          <thead>
            <tr>
              <th>Lap</th>
              <th>Time</th>
              <th>Prediction</th>
            </tr>
          </thead>
          <tbody>
            {laps.map((lap, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{formatTime(lap.time)}</td>
                <td>{lap.prediction !== null ? lap.prediction : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
