import styled, {keyframes } from "styled-components";

const expandAsLineAndGrow = keyframes`
  from {
    transform: scale(.1, .1);
    background: black;
  }
  35% {
    transform: scale(1, .1);
    background: transparent;
  }
  
  50% {
    transform: scale(1, 1);
  }
  90% {
    opacity: 1;
  }
  to {
    opacity: 0;
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
    animation: ${expandAsLineAndGrow} 4s;
  }
  &.turningOff {
    animation: ${expandAsLineAndGrow} 4s reverse;
  }
`;

