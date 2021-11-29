import './App.css';
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

const getSampleId = (event) => {
  let letter;
  if (event.type === "click") {
    letter = event.target.innerText;
    playSound(letter);
  } else if (event.type === "keydown") {
    if (drumPadLetters.includes(event.key.toUpperCase())) {
      letter = event.key.toUpperCase();
      playSound(letter);
    }
  }
}

const playSound = (sampleId) => {
  let sample = document.getElementById(sampleId);
  sample.play();
}

function App() {
  

  return (
    <>
      <DrumMachine>
        <Display />
        <div className="drum-pads">
          <DrumPad id="Kick" letter="Q" sound={Kick} playFunction={getSampleId}/>
          <DrumPad id="Snare" letter="W" sound={Snare} playFunction={getSampleId} />
          <DrumPad id="Snare-Rim" letter="E" sound={SnareRim} playFunction={getSampleId} />
          <DrumPad id="Hi-Tom" letter="A" sound={HiTom} playFunction={getSampleId} />
          <DrumPad id="Mid-Tom" letter="S" sound={MidTom} playFunction={getSampleId} />
          <DrumPad id="Floor-Tom" letter="D" sound={LowTom} playFunction={getSampleId} />
          <DrumPad id="Closed-Hats" letter="Z" sound={ClosedHH} playFunction={getSampleId} />
          <DrumPad id="Open-Hats" letter="X" sound={OpenHH} playFunction={getSampleId} />
          <DrumPad id="Crash" letter="C" sound={Crash} playFunction={getSampleId} />
        </div>
      </DrumMachine>
    </>
  );
}

window.addEventListener('keydown', getSampleId)

export default App;
