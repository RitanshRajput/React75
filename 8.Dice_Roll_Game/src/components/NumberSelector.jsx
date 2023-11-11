import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({error, setError, selectedNumber, setSelectedNumber}) => {

  const boxArray = [1, 2, 3, 4, 5, 6];

  const NumberSelectorHandler = (elem) => {
    setSelectedNumber(elem);
    setError("");
  }

  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
      <div className="flex">
        {boxArray.map((elem, index) => (
          <Box
            isSelected ={elem === selectedNumber}
            key={index}
            onClick={() => NumberSelectorHandler(elem)}
          >
            {elem}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    padding-right: 100px ;

    .error{
        color: red;
    }

    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
        color: aliceblue;
    }
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid aliceblue;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    color:  ${(props) => (props.isSelected ? "#091010" : "aliceblue")};
    background-color: ${(props)=> (props.isSelected ? "aliceblue": "#091010" )};
    transition: all 0.2s ease-in-out;
`;