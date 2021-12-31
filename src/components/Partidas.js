import React, { useState } from 'react';
import PartidaDisplay from './PartidaDisplay'

const styles = {
    tabla: {
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}

const Name = props => {
    
    return (
        <div>
            <table style={styles.tabla}>
                <thead>
                    <tr>
                        <th>Intento</th>
                        <th>Tiempo</th>
                        <th>Estrellas</th>
                    </tr>
                </thead>
                <tbody>
                {props.partidas.map(partida => 
                            <PartidaDisplay
                                key={partida.id}
                                status={partida.status}
                                tiempo={partida.tiempo}
                                estrellas={partida.estrellas}
                            />
                )}   
                </tbody>
            </table>  
        </div>
    );
     
};
 
export default Name;