import React from 'react'
import styled from 'styled-components';

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
}

export default TotalScore;


const ScoreContainer = styled.div`
    color: aliceblue;
    max-width: 400px;
    text-align: center;
    padding-left: 100px;
    /* background-color: green; */
    
    h1{
        font-size: 100px;
        line-height:100px ;
    }

    p{
        font-size: 24px;
        font-weight: 500px;
    }
`;
