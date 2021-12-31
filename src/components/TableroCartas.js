import React from "react";
import MarvelList from "./MarvelList";
import PlayAgain from "./playAgain";

const TableroCartas = (props)=> {
    return (
        <div>
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