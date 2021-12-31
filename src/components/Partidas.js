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
                    <PartidaDisplay />
                    <PartidaDisplay />
                    <PartidaDisplay />
                    
                </tbody>
            </table>  
        </div>
    );
     
};
 
export default Name;