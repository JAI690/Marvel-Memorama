import React from "react";

import IntentosRestantes from "./IntentosRestantes";
import TimerClock from "./TimerClock";
import Partidas from "./Partidas"

const styles = {
    general: {
        //margin: '40px 80px 40px 80px',
        border: '4px solid #000',
        //padding: '10px'
    },
    td: {
        //width: '10%',
        textAlign: 'center'
    }
}


class InfoBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

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
                            time={this.props.time}
                            key={this.props.timerId}
                            actualizar={this.props.actualizar}
                            gameProxy={this.props.gameProxy}
                            registrarTiempo={this.props.registrarTiempo}
                        /></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    };
};

export default InfoBar;    