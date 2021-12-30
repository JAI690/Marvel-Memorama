import React, { useState } from "react";
import MarvelList from "./MarvelList";
import PlayAgain from "./playAgain";

const TableroCartas = (props)=> {
    return (
        <div>
        {props.gameStatus !== 'active' ? (
                setTimeout(() => {
                    <PlayAgain onClick={props.startNewGame} gameStatus={props.gameStatus} />
                }, 2000)
            ) : (
                <MarvelList actualizar={props.checkStatus} />
            )}
        </div>
  );
}

export default TableroCartas