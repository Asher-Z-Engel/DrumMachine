import './App.css';
import { useState, useEffect } from 'react';
// Components
import DrumMachine from './components/DrumMachine';
import Display from './components/Display';
import DrumPad from './components/DrumPad';
import PowerButton from './components/PowerButton';
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

function App() {
  const [displayText, setDisplayText] = useState('');
  const [isOn, setIsOn] = useState(true);


  const handlePadActivation = (event) => {
    setDisplayText(event.target.id)
  }

  // const Pad = useRef(null);

  const handleKeyDown = (event) => {
    const padLetter = event.key.toUpperCase();
    if (drumPadLetters.includes(padLetter)) {
      const activePad = document.querySelector(`div.${padLetter}`);
      // if (Pad.current.isOn) {
      //   console.log(padLetter);
      // }
      // console.dir(activePad)
      // console.log(isOn);
      activePad.click();
    }
  }

  const handlePowerButton = () => setIsOn(prev => !prev);

  useEffect(() => {
    setDisplayText(isOn ? 'On' : 'Off')
  }, [isOn])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <DrumMachine>
        <PowerButton isOn={isOn} onClick={ handlePowerButton }/>
        <Display text={displayText} />
        <div className="drum-pads">
          <DrumPad id="Kick" letter="Q" sound={Kick} isOn={isOn} clickFunction={handlePadActivation} />
          <DrumPad id="Snare" letter="W" sound={Snare} isOn={isOn} clickFunction={handlePadActivation} />
          <DrumPad id="Snare-Rim" letter="E" sound={SnareRim} isOn={isOn} clickFunction={handlePadActivation} />
          <DrumPad id="Hi-Tom" letter="A" sound={HiTom} isOn={isOn} clickFunction={handlePadActivation} />
          <DrumPad id="Mid-Tom" letter="S" sound={MidTom} isOn={isOn} clickFunction={handlePadActivation} />
          <DrumPad id="Floor-Tom" letter="D" sound={LowTom} isOn={isOn} clickFunction={handlePadActivation} />
          <DrumPad id="Closed-Hats" letter="Z" sound={ClosedHH} isOn={isOn} clickFunction={handlePadActivation} />
          <DrumPad id="Open-Hats" letter="X" sound={OpenHH} isOn={isOn} clickFunction={handlePadActivation} />
          <DrumPad id="Crash" letter="C" sound={Crash} isOn={isOn} clickFunction={handlePadActivation} />
        </div>
      </DrumMachine>
    </>
  );
}

export default App;
