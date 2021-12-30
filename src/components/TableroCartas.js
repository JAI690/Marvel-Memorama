import React, { useState } from "react";
import MarvelList from "./MarvelList";
import PlayAgain from "./playAgain";

const TableroCartas = (props)=> {
    return (
        <div>
        {props.gameStatus === 'active' ? (
                <MarvelList actualizar={props.checkStatus} />
            ) : (
                <PlayAgain onClick={props.startNewGame} gameStatus={props.gameStatus} />
            )}
        </div>
  );
}

export default TableroCartas