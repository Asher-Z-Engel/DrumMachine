import './App.css';
import { useState, useEffect } from 'react';
// Components
import DrumMachine from './components/DrumMachine';
import Display from './components/Display';
import DrumPad from './components/DrumPad';
// Audio
import Kick from './audio/CYCdh_K1close_Kick-04.wav';
import Snare from './audio/CYCdh_K1close_Rim-07.wav';
import SnareRim from './audio/CYCdh_K1close_SdSt-06.wav';
import HiTom from './audio/CYCdh_K5-Tom01c.wav';
import MidTom from './audio/CYCdh_K5-Tom02c.wav';
import LowTom from './audio/CYCdh_K5-Tom03c.wav';
import ClosedHH from './audio/CYCdh_K1close_ClHat-01.wav';
import OpenHH from './audio/CYCdh_K1close_OpHat-01.wav';
import Crash from './audio/CyCdh_K3Crash-02.wav';

const drumPadLetters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

// const getSampleId = (event) => {
//   let letter;
//   if (event.type === "click") {
//     letter = event.target.innerText;
//     playSound(letter);
//   } else if (event.type === "keydown") {
//     // console.log("key pressed");
//     if (drumPadLetters.includes(event.key.toUpperCase())) {
//       letter = event.key.toUpperCase();
//       console.log("registered key pressed");
//       playSound(letter);
//     }
//   }
// }

// let sampleName = "";

// const playSound = (sampleId) => {
//   let sample = document.getElementById(sampleId);
//   sampleName = sample.parentElement.id;
//   console.log(sampleName);

//   sample.play();
// }

function App() {
  const [displayText, setDisplayText] = useState('');



  const handlePadActivation = (event) => {
    setDisplayText(event.target.id)
  }

  const handleKeyDown = (event) => {
    const padLetter = event.key.toUpperCase();
    if (drumPadLetters.includes(padLetter)) {
      const activePad = document.querySelector(`div.${padLetter}`);
      console.dir(activePad)
      activePad.click();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <DrumMachine>
        <Display text={displayText} />
        <div className="drum-pads">
          <DrumPad id="Kick" letter="Q" sound={Kick} clickFunction={handlePadActivation} />
          <DrumPad id="Snare" letter="W" sound={Snare} clickFunction={handlePadActivation} />
          <DrumPad id="Snare-Rim" letter="E" sound={SnareRim} clickFunction={handlePadActivation} />
          <DrumPad id="Hi-Tom" letter="A" sound={HiTom} clickFunction={handlePadActivation} />
          <DrumPad id="Mid-Tom" letter="S" sound={MidTom} clickFunction={handlePadActivation} />
          <DrumPad id="Floor-Tom" letter="D" sound={LowTom} clickFunction={handlePadActivation} />
          <DrumPad id="Closed-Hats" letter="Z" sound={ClosedHH} clickFunction={handlePadActivation} />
          <DrumPad id="Open-Hats" letter="X" sound={OpenHH} clickFunction={handlePadActivation} />
          <DrumPad id="Crash" letter="C" sound={Crash} clickFunction={handlePadActivation} />
        </div>
      </DrumMachine>
    </>
  );
}

export default App;
