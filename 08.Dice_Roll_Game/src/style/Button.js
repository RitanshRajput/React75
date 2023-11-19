import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8023d5;
  padding: 10px 18px;
  background: black;
  border-radius: 5px;
  border: none;
  min-width: 220px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid aliceblue;
  transition: all 0.2s ;

  &:hover{
    background: black;
    border: 1px solid aliceblue;
    color: #fff;
    transform: scale(1.1);
  }
`;