import TourSearch from '../../components/TourSearch';
import './index.scss'

function Landing() {
  return (
    <section id='landing'>
        <div className='imageWrap'>
            <img alt="River-and-mountains-of-snow" src="https://images.unsplash.com/photo-1505953003-4cb870261919?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        </div>
        <div className='aboveImage'>
          <h1 className='heading'>Extraordinary natural and cultural charm</h1>
          <span className='subheading'>Exploring Indonesia is an unforgetable adventure.</span>
          <TourSearch/>
          <div className='excellenceCards'>
            <div className='item'>
              <span className='number'>10M+</span>
              <span className='description'>Total Customers</span>
            </div>
            <div className='item'>
              <span className='number'>09+</span>
              <span className='description'>Years Of Experience</span>
            </div>
            <div className='item'>
              <span className='number'>12K</span>
              <span className='description'>Total Destinations</span>
            </div>
            <div className='item'>
              <span className='number'>5.0</span>
              <span className='description'>Average Rating</span>
            </div>
          </div>  
        </div>
    </section>
  );
}

export default Landing;
