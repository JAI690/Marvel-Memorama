import React, { useState } from 'react';
import PartidaDisplay from './PartidaDisplay'
const Name = props => {
    const [variable,setVariable] = useState();
    
    return (
        <div>
            <table>
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