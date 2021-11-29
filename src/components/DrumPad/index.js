import React from "react";
// Styles
import { Wrapper, Content } from "./DrumPad.styles";


const DrumPad = ({ sound, letter, id, playFunction }) => {
  

  return (
    <Wrapper id={id} className="drum-pad" onClick={playFunction}>
      <Content>
        {letter}
      </Content>
      <audio className="clip" id={letter} src={sound}></audio>
    </Wrapper>
  )
}

export default DrumPad;