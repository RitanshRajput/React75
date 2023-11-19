import React from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice, rollDice}) => {

  return (
    <DiceContainer>
      <div className='dice' onClick={rollDice} >
        <img src={`/DiceImage/dice_${currentDice}.png`} alt="dice pic" />
      </div>
      <p>Click On Dice to Roll</p>
    </DiceContainer>
  )
}

export default RollDice


const DiceContainer = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: aliceblue;

    .dice{
        cursor: pointer;
    }

    img{
        border: 1px solid aliceblue;
        background-color: aliceblue;
        border-radius: 25px;
    }

`;