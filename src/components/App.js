import React, { useState } from "react";
import TableroCartas from "./TableroCartas";
import InfoBar from "./InfoBar";

const styles = {
  general: {
    border: '4px solid #00F',
    margin: 'auto',
    marginTop: '2%',
    width: '80%',
    padding: '20px'
  },
  item: {
    border: '4px solid green',
    width: '90%',
    margin: 'auto',
  }
}

const App = ()=> {
  const [gameStatus,setGameStatus] = useState('active');
  const [gameProxy,setGameProxy] = useState('active');
  const [gameId, setGameId] = useState(1);
  const [timerId, setTimerId] = useState(1);
  const [intentos, setIntentos] = useState(5);
  const [partidas] = useState([])
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
    let partida = {};
    const id = Math.random();
    if(status==='lost'){
      partida = {
        id,
        status,
        tiempo:0,
        estrellas:0
      }
    }else{
      partida = {
        id,
        status,
        tiempo,
        estrellas
      }
    }
    partidas.push(partida)
    
  }

  return (
    <div style={styles.general}>
      <table width={'100%'}>
        <tr>
          <td>
            <div style={styles.item}>
              <InfoBar 
                  actualizar={checkStatus}
                  gameProxy={gameProxy}
                  timerId={timerId}
                  time={timer}
                  intentos={intentos}
                  partidas={partidas}
                  registrarTiempo={registrarTiempo}
              />
              </div> 
          </td>
        </tr>
        <tr>
          <td>
          <div style={styles.item}>
              <TableroCartas
                key={gameId} 
                startNewGame={() => {setGameId(gameId + 1); setTimerId(timerId +1); setGameStatus('active'); setGameProxy('active'); setIntentos(5); setTimer(30)}}
                checkStatus={checkStatus}
                gameStatus={gameStatus}
                intentos={intentos}
                usarIntento={usarIntento}
                />
                </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App