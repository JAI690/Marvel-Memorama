import React, { useState } from 'react';

const IntentosRestantes = props => {
    const [variable,setVariable] = useState();
    
    return (
        <div>
            <h2>Intentos restantes: {props.intentos}</h2>
        </div>
    );
     
};
 
export default IntentosRestantes;