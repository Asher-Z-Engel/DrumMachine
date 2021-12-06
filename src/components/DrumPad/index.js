import React, {useEffect, useRef} from "react";
// Styles
import { Wrapper, Content } from "./DrumPad.styles";


const DrumPad = ({ sound, letter, id, clickFunction }) => {
  const Pad = useRef(null);
  const Audio = useRef(null);

  const playAudio = (event) => {
    // console.dir(event.target)
    // event.target.classList.add("drum-pad-active");
    // setTimeout(() => { event.target.classList.remove("drum-pad-active") }, 1000)
    Pad.current.classList.add("drum-pad-active");
    Audio.current.play();
  }

  useEffect(() => {
    Pad.current.addEventListener("click", playAudio)
  }, [])

  return (
    <Wrapper id={id} className={`drum-pad ${letter}`} onClick={clickFunction} ref={Pad}>
      <Content>
        {letter}
      </Content>
      <audio className="clip" ref={Audio} id={letter} src={sound}></audio>
    </Wrapper>
  )
}

export default DrumPad;