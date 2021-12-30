import React, { useState } from "react";
import TableroCartas from "./TableroCartas";

const App = ()=> {
  const [gameId, setGameId] = useState(1);
  return (
    <div>
      <TableroCartas key={gameId} startNewGame={() => setGameId(gameId + 1)}/>
    </div>
  );
}

export default App