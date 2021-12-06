import React from "react";
import { Wrapper, Text } from "./Display.styles";

const Display = ({text}) => {
  return (
    <Wrapper id="display">
      <Text>{text}</Text>
    </Wrapper>
  )
}

export default Display;