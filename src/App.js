import './App.scss';
import Navbar from './components/Navbar';
import BestLocations from './sections/BestLocations';
import Landing from './sections/Landing';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <BestLocations/>
    </div>
  );
}

export default App;
