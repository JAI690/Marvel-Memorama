import React, { useState } from 'react';

const styles = {
    display:{
        textAlign: 'center'
    }
}

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
            <h2 style={styles.display}>Segundos restantes: {timer}</h2>
        </div>
    );
};
 
export default TimerClock;