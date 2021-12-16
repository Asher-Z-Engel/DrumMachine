import styled, {keyframes } from "styled-components";

const expandAsLineAndGrow = keyframes`
  from {
    transform: scale(.1, .1);
    background: black;
  }
  70% {
    transform: scale(1, .1);
    background: transparent;
  }
  
  to {
    transform: scale(1, 1);
}
`;

export const Wrapper = styled.div`
  width: 300px;
  height: 50px;
  background-color: #6A706E;
  border: 2px solid #60495a;
  border-radius: 10px;
  margin: 30px auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h1`
  text-align: center;
  font-weight: 300;
  
  &.turningOn {
    animation: ${expandAsLineAndGrow} 2s;
  }
  &.turningOff {
    animation: ${expandAsLineAndGrow} 2s 2s reverse;
  }
`;

