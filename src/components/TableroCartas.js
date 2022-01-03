import React from "react";
import MarvelList from "./MarvelList";
import PlayAgain from "./playAgain";

const styles = {
    general: {
      border: '4px solid #000',
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
                <PlayAgain onClick={props.startNewGame} gameStatus={props.gameStatus} />
            )}
        </div>
  );
}

export default TableroCartas