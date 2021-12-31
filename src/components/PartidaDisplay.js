import React, { useState } from 'react';

const Name = props => {
    const [variable,setVariable] = useState();
    
    return (
        <tr>
            <td>{props.status}</td>
            <td>{props.tiempo}</td>
            <td>{props.estrellas}</td>
        </tr>
    );
     
};
 
export default Name;