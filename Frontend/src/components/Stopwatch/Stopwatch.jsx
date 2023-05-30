import React, { useEffect, useState } from 'react'

export function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [lap, setLap] = useState([]);

    useEffect(() => {
        let timer;

        if(isRunning){
            timer = setInterval(() => {
                setCurrentTime(Date.now() - startTime);
            }, 10);
        }

        return () => {
            clearInterval(timer)
        }
    }, [isRunning, startTime]);

    const startStopwatch = () => {
        if(!isRunning){
            setStartTime(Date.now() - currentTime);
        }
        setIsRunning(!isRunning);
    }

    const resetStopwatch = () => {
        setIsRunning(false);
        setStartTime(0);
        setCurrentTime(0);
        setLap([]);
    };

    const addLap = () => {
        if(isRunning){
            const laptime = currentTime - lap.reduce((acc, curr) => {
                return acc + curr;
            }, 0);
            setLap([...lap, laptime]);
        }
    }

    function formatTime(time){
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time / 1000) % 60);
        const milliseconds = Math.floor((time / 10) % 100);

        return `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
 
    }

    const padTime = (value) => {
        return value.toString().padStart(2, '0');
    };


  return (
    <div>
        <h1>Stopwatch</h1>
        <div className="stopwatch">{formatTime(currentTime)}</div>
        <div className="controls">
            <button onClick={startStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={addLap} disabled={!isRunning}>Lap</button>
            <button onClick={resetStopwatch}>Reset</button>
        </div>
        <ul className="lap-list">
            {lap.map((lap, index) => (
            <li key={index}>Lap {index + 1}: {formatTime(lap)}</li>
            ))}
        </ul>
    </div>
  )
}

