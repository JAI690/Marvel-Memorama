import React, { useState } from "react";
import MarvelList from "./MarvelList";
import PlayAgain from "./playAgain";

const TableroCartas = (props)=> {
    return (
        <div>
        {props.gameStatus !== 'active' ? (
                <PlayAgain onClick={props.startNewGame} gameStatus={props.gameStatus} />
            ) : (
                <MarvelList actualizar={props.checkStatus} />
            )}
        </div>
  );
}

export default TableroCartas