import React, { useState } from "react";
import TableroCartas from "./TableroCartas";
import InfoBar from "./InfoBar";

const App = ()=> {
  const [gameStatus,setGameStatus] = useState('active');

  const checkStatus = (status) => {
      setGameStatus(status)
  }

  const [gameId, setGameId] = useState(1);
  const [timerId, setTimerId] = useState(1);

  return (
    <div>
      <InfoBar 
          actualizar={checkStatus}
          gameStatus={gameStatus}
          timerId={timerId}
      />
      <TableroCartas 
          key={gameId} 
          startNewGame={() => {setGameId(gameId + 1); setTimerId(timerId +1); setGameStatus('active')}}
          checkStatus={checkStatus}
          gameStatus={gameStatus}
          />
    </div>
  );
}

export default App