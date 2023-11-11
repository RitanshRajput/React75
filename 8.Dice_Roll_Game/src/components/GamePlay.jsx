import React,{useState} from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import { Button } from '../style/Button'
import Rules from './Rules'

const GamePlay = () => {

  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [rules, setRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {

    if( !selectedNumber) {
        setError("You have not selected any Number");
        return ;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if(selectedNumber === randomNumber){
      setScore((prev) => prev+2) ;
    }
    else{
      setScore((prev) => prev-1);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  }

  const ruleHandler = () => {
    setRules(!rules) ;
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />

      <div className="btns">
        <Button onClick={resetScore}>Reset</Button>
        <Button onClick={ruleHandler}> {rules ? "Hide" : "Show"} Rules</Button>
      </div>

      <Rules rules={rules} setRules={setRules} />
    </MainContainer>
  );
};

export default GamePlay;


const MainContainer = styled.main`
    transition: all 0.1s ease-in-out;
    padding-top: 70px;
    .top_section{
        display: flex;
        align-items: end;
        justify-content: space-between;
    }

    .btns{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 10px;
    }

`;