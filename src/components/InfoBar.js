import React from "react";
import TimerClock from "./TimerClock";

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
                <table>
                    <tbody>
                    <tr>
                        <td><h1 style={styles.text}>Info Bar</h1>  </td>
                        <td><TimerClock 
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