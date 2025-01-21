import './index.scss'
import LocationCards from './locationCards';

function BestLocations() {
  return (
    <section id="bestLocation" className='marginWrap'>
      <div className="header">
        <div className="left">
          <span className="subHeader">Best Location</span>
          <h2>Indonesian tourism</h2>
        </div>
        <div className="right">
          <p>Extraordinary natural beauty, enjoy the rich culture, and experience the friendliness of the local people. </p>
        </div>
      </div>
      <LocationCards/>
    </section>
  );
}

export default BestLocations;