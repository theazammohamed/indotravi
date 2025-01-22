import './App.scss';
import Navbar from './components/Navbar';
import BestLocations from './sections/BestLocations';
import Blog from './sections/Blog';
import Footer from './sections/Footer';
import HowItWorksSection from './sections/HowItWorks';
import Landing from './sections/Landing';
import Testimonials from './sections/Testimonials';
import TourPackage from './sections/TourPackage';

// find navbar in components
// find sections and its related unique components in the same folder of each sections

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <BestLocations/>
      <HowItWorksSection/>
      <TourPackage/>
      <Testimonials/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
