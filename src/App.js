import './App.css';
import { useState, useEffect } from 'react';
// Components
import DrumMachine from './components/DrumMachine';
import Display from './components/Display';
import DrumPad from './components/DrumPad';
import PowerButton from './components/PowerButton';
import Slider from './components/Slider';
// Audio
import Kick from './audio/Kick.mp3';
import Snare from './audio/Snare.mp3';
import SnareRim from './audio/Snare-Rim.mp3';
import HiTom from './audio/Hi-Tom.mp3';
import MidTom from './audio/Mid-Tom.mp3';
import LowTom from './audio/Low-Tom.mp3';
import ClosedHH from './audio/Closed-Hats.mp3';
import OpenHH from './audio/Open-Hats.mp3';
import Crash from './audio/Crash.mp3';

const drumPadLetters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const acousticKit = {
  sounds: [Kick, Snare, SnareRim, HiTom, MidTom, LowTom, ClosedHH, OpenHH, Crash],
  names: ["Kick", "Snare", "Snare-Rim", "Hi-Tom", "Mid-Tom", "Low-Tom", "Closed-Hats", "Open-Hats", "Crash"]};

// const kit = acousticKit.sounds;
// const kitNames = acousticKit.names;

function App() {
  const [displayText, setDisplayText] = useState('');
  const [isOn, setIsOn] = useState(true);
  const [volume, setVolume] = useState(0.5)
  const [kit, setKit] = useState(acousticKit.sounds);
  const [kitNames, setKitNames] = useState(acousticKit.names);


  const handlePadActivation = (event) => {
    setDisplayText(event.target.id)
  }

  const handleKeyDown = (event) => {
    const padLetter = event.key.toUpperCase();
    if (drumPadLetters.includes(padLetter)) {
      const activePad = document.querySelector(`button.${padLetter}`);
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
          <DrumPad id={kitNames[0]} letter="Q" sound={kit[0]} volume={volume} isOn={isOn} clickFunction={handlePadActivation} />
          <DrumPad id={kitNames[1]} letter="W" sound={kit[1]} volume={volume} isOn={isOn} clickFunction={handlePadActivation} />
          <DrumPad id={kitNames[2]} letter="E" sound={kit[2]} volume={volume} isOn={isOn} clickFunction={handlePadActivation} />
          <DrumPad id={kitNames[3]} letter="A" sound={kit[3]} volume={volume} isOn={isOn} clickFunction={handlePadActivation} />
          <DrumPad id={kitNames[4]} letter="S" sound={kit[4]} volume={volume} isOn={isOn} clickFunction={handlePadActivation} />
          <DrumPad id={kitNames[5]} letter="D" sound={kit[5]} volume={volume} isOn={isOn} clickFunction={handlePadActivation} />
          <DrumPad id={kitNames[6]} letter="Z" sound={kit[6]} volume={volume} isOn={isOn} clickFunction={handlePadActivation} />
          <DrumPad id={kitNames[7]} letter="X" sound={kit[7]} volume={volume} isOn={isOn} clickFunction={handlePadActivation} />
          <DrumPad id={kitNames[8]} letter="C" sound={kit[8]} volume={volume} isOn={isOn} clickFunction={handlePadActivation} />
        </div>
        <Slider onChange={e => setVolume(e.target.value)} />
      </DrumMachine>
    </>
  );
}

export default App;
