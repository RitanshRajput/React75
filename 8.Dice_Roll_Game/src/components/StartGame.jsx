import React from 'react'
import styled from 'styled-components'
import Dices from "../assets/DiceIcon.png"
import { Button } from '../style/Button'

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
      <img src={Dices} alt="dices" />
      </div>
      <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    align-items: center;
    margin: 0 auto;

    .content{
        h1{
          font-size: 96px;
          white-space: nowrap;
          color: aliceblue;
        }
    }
`;



export default StartGame
