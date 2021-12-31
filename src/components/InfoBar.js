import React from "react";

import IntentosRestantes from "./IntentosRestantes";
import TimerClock from "./TimerClock";
import Partidas from "./Partidas"

const styles = {
    general: {
        margin: '40px 80px 40px 80px',
        border: '4px solid #000',
        padding: '10px'
    },
    text: {
        border: '4px solid #000',
        margin: '20px',
        padding: '10px'
    },
    td: {
        width: '10%',
        border: '1px solid #000',
        textAlign: 'center'
    }
}


class InfoBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        console.log(this.props.partidas);
    }

    
    render(){
        return (
            <div style={styles.general}>
                <table >
                    <tbody>
                    <tr>
                        <td style={styles.td}><Partidas partidas={this.props.partidas}/></td>
                        <td style={styles.td}><IntentosRestantes intentos={this.props.intentos}/></td>
                        <td style={styles.td}><TimerClock 
                            key={this.props.timerId}
                            actualizar={this.props.actualizar}
                            gameProxy={this.props.gameProxy}
                        /></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    };
};

export default InfoBar;    