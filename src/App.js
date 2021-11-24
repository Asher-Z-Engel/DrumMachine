import './App.css';
// Components
import DrumMachine from './components/DrumMachine';
import Display from './components/Display';

function App() {
  return (
    <>
      <DrumMachine>
        <Display />
      </DrumMachine>
    </>
  );
}

export default App;
