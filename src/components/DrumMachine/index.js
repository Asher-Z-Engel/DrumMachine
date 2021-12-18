import React from "react";
// Styles
import { Wrapper } from "./DrumMachine.styles";

const DrumMachine = ({children, loading, isOn}) => {
  return (
    <Wrapper id="drum-machine" loading={loading} isOn={isOn}>{ children }</Wrapper>
  )
}

export default DrumMachine;