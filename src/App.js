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

function App() {
  const playSound = (event) => {
    // console.dir(event.target.innerText);
    let sample = document.getElementById(event.target.innerText);
    console.dir(sample);
    sample.play();
  }

  return (
    <>
      <DrumMachine>
        <Display />
        <div className="drum-pads">
          <DrumPad id="Kick" letter="Q" sound={Kick} playFunction={playSound}/>
          <DrumPad id="Snare" letter="W" sound={Snare} playFunction={playSound} />
          <DrumPad id="Snare-Rim" letter="E" sound={SnareRim} playFunction={playSound} />
          <DrumPad id="Hi-Tom" letter="A" sound={HiTom} playFunction={playSound} />
          <DrumPad id="Mid-Tom" letter="S" sound={MidTom} playFunction={playSound} />
          <DrumPad id="Floor-Tom" letter="D" sound={LowTom} playFunction={playSound} />
          <DrumPad id="Closed-Hats" letter="Z" sound={ClosedHH} playFunction={playSound} />
          <DrumPad id="Open-Hats" letter="X" sound={OpenHH} playFunction={playSound} />
          <DrumPad id="Crash" letter="C" sound={Crash} playFunction={playSound} />
        </div>
      </DrumMachine>
    </>
  );
}

export default App;
