import React from "react";

const styles = {
    general: {
        margin: '40px 80px 40px 80px'
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
                <h1 style={styles.text}>Info Bar</h1>
            </div>
        );
    };
};

export default InfoBar;    