import React, { useState } from "react";
import TableroCartas from "./TableroCartas";
import InfoBar from "./InfoBar";

const App = ()=> {
  const [gameStatus,setGameStatus] = useState('active');

  const checkStatus = (status) => {
      setGameStatus(status)
  }

  const [gameId, setGameId] = useState(1);
  return (
    <div>
      <InfoBar />
      <TableroCartas 
          key={gameId} startNewGame={() => setGameId(gameId + 1)}
          checkStatus={checkStatus}
          gameStatus={gameStatus}
          />
    </div>
  );
}

export default App