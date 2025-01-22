import './App.scss';
import Navbar from './components/Navbar';
import BestLocations from './sections/BestLocations';
import HowItWorksSection from './sections/HowItWorks';
import Landing from './sections/Landing';

// find navbar in components
// find sections and its related unique components in the same folder of each sections

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <BestLocations/>
      <HowItWorksSection/>
    </div>
  );
}

export default App;
