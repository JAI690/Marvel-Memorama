import React from "react";
import MarvelList from "./MarvelList";
import PlayAgain from "./playAgain";

const styles = {
    general: {

      height: '100%'
    }
  }

const TableroCartas = (props)=> {
    return (
        <div style={styles.general}>
        {props.gameStatus === 'active' ? (
                <MarvelList actualizar={props.checkStatus} intentos={props.intentos}
                usarIntento={props.usarIntento} />
            ) : (
                <PlayAgain onClick={props.startNewGame} gameStatus={props.gameStatus} intentos={props.intentos}/>
            )}
        </div>
  );
}

export default TableroCartas