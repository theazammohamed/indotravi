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
        </div>

    </section>
  );
}

export default Landing;
