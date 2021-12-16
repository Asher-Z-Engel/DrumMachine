import './App.css';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
// Components
import DrumMachine from './components/DrumMachine';
import Display from './components/Display';
import DrumPad from './components/DrumPad';
import PowerButton from './components/PowerButton';
import Slider from './components/Slider';
import KitSelector from './components/KitSelector';
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
import ECrash from './audio/crash-noise.mp3';
import EClosedHH from './audio/hihat-plain.mp3';
import EKick from './audio/kick-808.mp3';
import EOpenHH from './audio/openhat-slick.mp3';
import EShaker from './audio/shaker-shuffle.mp3';
import ESnare1 from './audio/snare-noise.mp3';
import ESnare2 from './audio/snare-808.mp3';
import ETom from './audio/tom-short.mp3';
import EClap from './audio/clap-808.mp3';
import Click from './audio/perc-808.mp3';
import Chirp from './audio/perc-chirpy.mp3';
import Hollow from './audio/perc-hollow.mp3'
import Metal from './audio/perc-metal.mp3';
import Nasty from './audio/perc-nasty.mp3';
import Short from './audio/perc-short.mp3';
import Tambo from './audio/perc-tambo.mp3';
import Tribal from './audio/perc-tribal.mp3';
import Weird from './audio/perc-weirdo.mp3';

const drumPadLetters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const acousticKit = {
  sounds: [Kick, Snare, SnareRim, HiTom, MidTom, LowTom, ClosedHH, OpenHH, Crash],
  names: ["Kick", "Snare", "Snare-Rim", "Hi-Tom", "Mid-Tom", "Low-Tom", "Closed-Hats", "Open-Hats", "Crash"],
  color: {default: "#00cae0", secondary: "#00818f"}
};
  
const electroKit = {
  sounds: [EKick, ESnare1, ESnare2, ETom, EShaker, EClap, EClosedHH, EOpenHH, ECrash],
  names: ["Kick", "Snare", "Snare-Rim", "Tom", "Shaker", "Clap", "Closed-Hats", "Open-Hats", "Crash"],
  color: {default: "#19ff19", secondary: "#00cc00"}
};

const percussionKit = {
  sounds: [Click, Chirp, Hollow, Metal, Nasty, Short, Tambo, Tribal, Weird],
  names: ["Click", "Chirp", "Hollow", "Metal", "Nasty", "Short", "Tambo", "Tribal", "Weird"],
  color: {default: "#c2aebc", secondary: "#9f7f95"}
}

function App() {
  const [displayText, setDisplayText] = useState('');
  const [isOn, setIsOn] = useState(true);
  const [volume, setVolume] = useState(0.5)
  const [kitSounds, setKitSounds] = useState(acousticKit.sounds);
  const [kitNames, setKitNames] = useState(acousticKit.names);
  const [padColor, setPadColor] = useState(acousticKit.color);
  const [loading, setLoading] = useState(false);

  const handlePadActivation = (event) => {
    setDisplayText(event.target.id)
  }

  const handleKeyDown = (event) => {
    const padLetter = event.key.toUpperCase();
    if (drumPadLetters.includes(padLetter)) {
      const activePad = document.querySelector(`.${padLetter}`);
      activePad.click();
    }
  }

  const handlePowerButton = () => {
    if (!loading) setIsOn(prev => !prev);
  }

  useEffect(() => {
    setDisplayText(isOn ? 'Welcome!' : 'Goodbye!');
    setTimeout(() => { setDisplayText('') }, 4000);
    setLoading(true);
    setTimeout(() => setLoading(false), 4000);
  }, [isOn])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, []);

  const handleKitSelection = (e) => {
    
    const selection = e.target.value;
    if (selection === "Acoustic") {
      setKitSounds(acousticKit.sounds);
      setKitNames(acousticKit.names);
      setDisplayText("Acoustic");
      setPadColor(acousticKit.color);
    } else if (selection === "Electro") {
      setKitSounds(electroKit.sounds);
      setKitNames(electroKit.names);
      setDisplayText("Electro");
      setPadColor(electroKit.color);
    } else if (selection === "Percussion") {
      setKitSounds(percussionKit.sounds);
      setKitNames(percussionKit.names);
      setDisplayText("Percussion");
      setPadColor(percussionKit.color);
    }
  }

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  }

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return
    }
    setDisplayText(`Volume: ${Math.floor(volume * 100)}`);
  }, [volume])

  return (
    <>
      <DrumMachine>
        <PowerButton isOn={isOn} onClick={ handlePowerButton }/>
        <Display text={displayText} isOn={isOn}/>
        <Slider onChange={handleVolumeChange} isOn={isOn}/>
        <div className="drum-pads">
          <DrumPad id={kitNames[0]} letter="Q" sound={kitSounds[0]} volume={volume} isOn={isOn} clickFunction={handlePadActivation} color={padColor}/>
          <DrumPad id={kitNames[1]} letter="W" sound={kitSounds[1]} volume={volume} isOn={isOn} clickFunction={handlePadActivation} color={padColor}/>
          <DrumPad id={kitNames[2]} letter="E" sound={kitSounds[2]} volume={volume} isOn={isOn} clickFunction={handlePadActivation} color={padColor}/>
          <DrumPad id={kitNames[3]} letter="A" sound={kitSounds[3]} volume={volume} isOn={isOn} clickFunction={handlePadActivation} color={padColor}/>
          <DrumPad id={kitNames[4]} letter="S" sound={kitSounds[4]} volume={volume} isOn={isOn} clickFunction={handlePadActivation} color={padColor}/>
          <DrumPad id={kitNames[5]} letter="D" sound={kitSounds[5]} volume={volume} isOn={isOn} clickFunction={handlePadActivation} color={padColor}/>
          <DrumPad id={kitNames[6]} letter="Z" sound={kitSounds[6]} volume={volume} isOn={isOn} clickFunction={handlePadActivation} color={padColor}/>
          <DrumPad id={kitNames[7]} letter="X" sound={kitSounds[7]} volume={volume} isOn={isOn} clickFunction={handlePadActivation} color={padColor}/>
          <DrumPad id={kitNames[8]} letter="C" sound={kitSounds[8]} volume={volume} isOn={isOn} clickFunction={handlePadActivation} color={padColor}/>
        </div>
        <fieldset className="kit-selectors" name="kit" onChange={handleKitSelection}>
          <legend>Kit</legend>
          <KitSelector name="kit" kitName="Acoustic" isOn={isOn} color={acousticKit.color}/>
          <KitSelector name="kit" kitName="Electro" isOn={isOn} color={electroKit.color}/>
          <KitSelector name="kit" kitName="Percussion" isOn={isOn} color={percussionKit.color}/>
        </fieldset>
      </DrumMachine>
    </>
  );
}

export default App;
