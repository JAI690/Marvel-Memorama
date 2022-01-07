import React from 'react';

const styles = {
    contenedor: {
        margin: 'auto'
    },
    tabla: {
        margin: 'auto'
    },
    img: {
        objectFit: 'cover',
    }
}

const EstrellasDisplay = props => {
    

    return (
        <div  style={styles.contenedor}>
            <table style={styles.tabla}>
                <tbody>
                    <tr>
                    {props.gameStatus === 'won' ?  
                    
                    Array.from({length: props.intentos }, (i) => (<td><img style={styles.img} src='logo192.png' key={i} alt="none"/></td>)) 
                    
                    : '' }
                    </tr>
                </tbody>
            </table>
        </div>
    );
     
};
 
export default EstrellasDisplay;