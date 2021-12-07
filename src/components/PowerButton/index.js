import React from "react";
// Styles
import { Wrapper } from "./PowerButton.styles";

const PowerButton = ({isOn, onClick}) => {
  return (
    <Wrapper isOn={isOn} onClick={onClick}>
      <i class="fas fa-power-off"></i>
    </Wrapper>
  )
}

export default PowerButton;