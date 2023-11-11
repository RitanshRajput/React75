import React from 'react'
import styled from 'styled-components'

const Rules = ({rules}) => {
  return (
    <>
      {rules ? 
        <RuleContainer>
      <h2>How to play the game</h2>
      <div className="text">
      <p><li>Select any number</li></p>
      <p><li>Click on Dice Image</li></p>
      <p><li>Compare your selected number and the number on dice.</li></p>
      <p><li>If you get wrong dice then 1 points will be deducted ➖</li></p>
      <p><li>If you get Right dice then 2 points will be Added ➕</li></p>
    
      </div>
      </RuleContainer>
      : " "
      }
    </>
  );
};

export default Rules

const RuleContainer = styled.div`
    max-width: 650px;
    padding: 25px;
    height: 250px;
    background-color: #000;
    border: 1px solid aliceblue;
    color: aliceblue;
    position: absolute;
    margin-left: 450px;
    margin-top: -450px;

    h2{
      background: transparent;
      font-size: 24px;
    }

    .text{
      background: transparent;
      margin-top: 14px;
      li{
          background: #000;
      }
    }
`;