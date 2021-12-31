import React from 'react';

const Name = props => {
    
    return (
        <tr>
            <td>{props.status}</td>
            <td>{props.tiempo}</td>
            <td>{props.estrellas}</td>
        </tr>
    );
     
};
 
export default Name;