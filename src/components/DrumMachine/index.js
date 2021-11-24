import React from "react";
// Styles
import { Wrapper } from "./DrumMachine.styles";

const DrumMachine = ({children}) => {
  return (
    <Wrapper id="drum-machine">{ children }</Wrapper>
  )
}

export default DrumMachine;