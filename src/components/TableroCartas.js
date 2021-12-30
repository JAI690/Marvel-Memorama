import React, { useState } from "react";
import MarvelList from "./MarvelList";
import PlayAgain from "./playAgain";

const TableroCartas = (props)=> {
    const [gameStatus,setGameStatus] = useState('active');

    const checkStatus = (status) => {
        setGameStatus(status)
    }

    return (
        <div>
        {gameStatus !== 'active' ? (
                <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
            ) : (
                <MarvelList actualizar={checkStatus} />
            )}
        </div>
  );
}

export default TableroCartas