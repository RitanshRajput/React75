import { useState } from 'react';
import './App.css'
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted(!isGameStarted) ;
  }

  return (
    <>
    {
      isGameStarted ?  
      <GamePlay /> 
      : <StartGame  toggle={toggleGamePlay} /> 
    }
    </>
  )
}

export default App
