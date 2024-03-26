import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, settime] = useState(0);
  const [running, setrunning] = useState(false);

  useEffect( ()=> {
    let interval;
    if(running){
      interval = setInterval(()=>{
        settime(prevtime => prevtime + 1)
      } ,10)   // every 10 millisecon converted into centisecod
    }
    else{
      clearInterval(interval);
    }
    return ()=> clearInterval(interval);

  }, [running])

  const handleStartStop = ()=>{
    let prevstate = running;
    setrunning(prevstate = !prevstate)
  }

  const handleReset = ()=>{
    settime(0);
    setrunning(false);
  }

  const formdata = ()=>{
      const centisecond = (`0${time % 100}`).slice(-2);
      const second = (`0${Math.floor((time / 100) % 60)}`).slice(-2);
      const minute = (`0${Math.floor((time / 6000) % 60)}`).slice(-2);



      return `${minute}:${second}:${centisecond}`

  }

  return (
    <div className="table">
    <div  className="stopwatch">
      <h1>STOP WATCH</h1>
      <div className="time">{formdata()}</div>
      <div className="btn">
        <button onClick={handleStartStop}>{running?'STOP':'START'}</button>
        <button onClick={handleReset}>RESET</button>
      </div>
    </div>
    </div>
  )
}

export default App
