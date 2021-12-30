import React, { useState } from 'react';

const TimerClock = props => {
    const [timer,setTimer] = useState(30);

    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    const tick = () => {
        if(props.gameProxy==='active'){
            if(timer>0){
                setTimer(timer-1);
            }else{
                props.actualizar('lost')
            }
        }
    }

    return (
        <div>
            <h2>Segundos restantes: {timer}</h2>
            <button onClick={() => setTimer(timer-1)}>click</button>
        </div>
    );
};
 
export default TimerClock;