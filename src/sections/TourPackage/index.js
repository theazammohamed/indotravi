import './index.scss'
import Btn from '../../components/Button' 
import TourCards from './tourCards';

function TourPackage() {
    return (
        <section id='tourPackage' className='marginWrap'>
             <div className="header">
                <div className="left">
                    <span className="subHeader">Tour packages</span>
                    <h2>Our tourist destination</h2>
                </div>
                <div className="right">
                    <p>Our tourist destinations offer an unrivaled blend of natural beauty and cultural richness</p>
                </div>
            </div>
            <TourCards/>
            <div className='cta'>
                <Btn text="View more" size="btn-long" colour="black" textCol="white"/>
            </div>
        </section>
    );
}

export default TourPackage;