import React, {useEffect, useState, useRef } from "react";
// Styles
import { Wrapper } from "./DrumPad.styles";


const DrumPad = ({ sound, letter, id, clickFunction, isOn, volume }) => {
  const Pad = useRef(null);
  const Audio = useRef(null);
  const Volume = useRef(volume)
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    Volume.current = volume;
  }, [volume])

  const playAudio = () => {
    setIsActive(true);
    setTimeout(() => { setIsActive(false) }, 100)
    Audio.current.play();
  }

  useEffect(() => {
    Pad.current.addEventListener("click", playAudio)
  }, [])

  return (
    <Wrapper isActive={isActive} id={id} isOn={isOn} className={`drum-pad ${letter}`} onClick={clickFunction} ref={Pad} disabled={!isOn}>
      {letter}
      <audio className="clip" ref={Audio} id={letter} src={sound} ></audio>
    </Wrapper>
  )
}

export default DrumPad;