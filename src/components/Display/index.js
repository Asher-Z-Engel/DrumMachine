import React, {useEffect, useRef} from "react";
import { Wrapper, Text } from "./Display.styles";

const Display = ({ text, isOn }) => {
  const DisplayText = useRef(null);
  
  useEffect(() => {
    if (isOn) {
      DisplayText.current.classList.add('turningOn');
      setTimeout(() => DisplayText.current.classList.remove('turningOn'), 4000);
    } else {
      DisplayText.current.classList.add('turningOff')
      setTimeout(() => DisplayText.current.classList.remove('turningOff'), 4000)
    }
  }, [isOn])

  return (
    <Wrapper id="display">
      <Text ref={DisplayText}>{text}</Text>
    </Wrapper>
  )
}

export default Display;