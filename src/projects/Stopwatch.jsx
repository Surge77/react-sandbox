import {useRef, useState} from "react";

export const Stopwatch = () => {

    const [time, setTime] = useState(0);
    const timeRef = useRef(null) //holds the interval ID

    const start = () => {
        if (timeRef.current !== null) return // Stopwatch already running
        timeRef.current = setInterval(() => {
            setTime(((t) => t + 1))
        }, 1000);
    }

    const stop = () => {
        clearInterval(timeRef.current)
        timeRef.current = null; //reset ref
    }

    const reset = () => {
        stop();
        setTime(0);
    }

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>⏱ Stopwatch: {time}s</h1>
            <button onClick={reset}>Reset</button>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>

        </div>
    )
}