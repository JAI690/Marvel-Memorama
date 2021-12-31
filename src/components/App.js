import React, { useState } from "react";
import TableroCartas from "./TableroCartas";
import InfoBar from "./InfoBar";

const App = ()=> {
  const [gameStatus,setGameStatus] = useState('active');
  const [gameProxy,setGameProxy] = useState('active');
  const [gameId, setGameId] = useState(1);
  const [timerId, setTimerId] = useState(1);
  const [intentos, setIntentos] = useState(5);
  const [partidas, setPartidas] = useState([])
  const [tiempo, setTiempo] = useState(30);
  const [timer,setTimer] = useState(30);

  const checkStatus = (status) => {
      setGameProxy(status)
      setTimeout(() => {
        setGameStatus(status)
    }, 2000);
    if(status!=='active'){
      guardarPartida(status,timer,intentos)
    }
  }

  const usarIntento = () => {
      setIntentos(intentos-1);
    }

  const registrarTiempo = () => {
    if(gameProxy==='active'){
      if(timer>0){
          setTimer(timer-1);
      }else{
        checkStatus('lost')
      }
  }
  }
  
  const guardarPartida = (status,tiempo,estrellas) => {
    let partida = {
    };
    if(status==='lost'){
      partida = {
        status,
        tiempo:0,
        estrellas:0
      }
    }else{
      partida = {
        status,
        tiempo,
        estrellas
      }
    }
    partidas.push(partida)
    
  }

  return (
    <div>
      <InfoBar 
          actualizar={checkStatus}
          gameProxy={gameProxy}
          timerId={timerId}
          time={timer}
          intentos={intentos}
          partidas={partidas}
          registrarTiempo={registrarTiempo}
      />
      <TableroCartas 
          key={gameId} 
          startNewGame={() => {setGameId(gameId + 1); setTimerId(timerId +1); setGameStatus('active'); setGameProxy('active'); setIntentos(5)}}
          checkStatus={checkStatus}
          gameStatus={gameStatus}
          intentos={intentos}
          usarIntento={usarIntento}
          />
    </div>
  );
}

export default App