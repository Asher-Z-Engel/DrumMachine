import React, {useEffect, useState, useRef} from "react";
// Styles
import { Wrapper, Content } from "./DrumPad.styles";


const DrumPad = ({ sound, letter, id, clickFunction }) => {
  const Pad = useRef(null);
  const Audio = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const playAudio = () => {
    setIsActive(true);
    setTimeout(() => { setIsActive(false) }, 100)
    Audio.current.play();
  }

  useEffect(() => {
    Pad.current.addEventListener("click", playAudio)
  }, [])

  return (
    <Wrapper isActive={isActive} id={id} className={`drum-pad ${letter}`} onClick={clickFunction} ref={Pad}>
      <Content isActive={isActive}>
        {letter}
      </Content>
      <audio className="clip" ref={Audio} id={letter} src={sound}></audio>
    </Wrapper>
  )
}

export default DrumPad;