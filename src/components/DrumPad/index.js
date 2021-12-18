import React, {useEffect, useState, useRef } from "react";
// Styles
import { Button } from "./DrumPad.styles";


const DrumPad = ({ sound, letter, id, clickFunction, isOn, volume, color, loading }) => {
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
    Audio.current.volume = Volume.current;
    Audio.current.currentTime = 0;
    Audio.current.play();
  }

  useEffect(() => {
    Pad.current.addEventListener("click", playAudio)
  }, [])

  return (
      <Button isActive={isActive} id={id} isOn={isOn} className={`drum-pad ${letter}`} onClick={clickFunction} ref={Pad} disabled={!isOn && !loading} color={color}>
        {letter}
        <audio className="clip" ref={Audio} id={letter} src={sound} ></audio>
      </Button>
  )
}

export default DrumPad;