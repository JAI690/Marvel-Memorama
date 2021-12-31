import React, { useState } from 'react';

const styles = {
    display:{
        textAlign: 'center'
    }
}

const TimerClock = props => {

    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    const tick = () => {
        props.registrarTiempo()
    }

    return (
        <div>
            <h2 style={styles.display}>Segundos restantes: {props.time}</h2>
        </div>
    );
};
 
export default TimerClock;