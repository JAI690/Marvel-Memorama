import React, { useState } from "react";
import TableroCartas from "./TableroCartas";
import InfoBar from "./InfoBar";

const App = ()=> {
  const [gameId, setGameId] = useState(1);
  return (
    <div>
      <InfoBar />
      <TableroCartas key={gameId} startNewGame={() => setGameId(gameId + 1)}/>
    </div>
  );
}

export default App