// import './index.scss';
// import TourSearch from '../../components/TourSearch';
// import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
// import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
// import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
// import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

// const List = {
//     item01: {
//         muiIcon: <TravelExploreOutlinedIcon sx={{ fontSize: 40, color: "var(--blue)", backgroundColor: "#1d224421", padding: "3px", borderRadius: "8px" }}/>,
//         heading: "Find your destination",
//         description: "Embark on a journey to discover your dream destination, where adventure and relaxation await",
//     },
//     item02: {
//         muiIcon: <AirplaneTicketOutlinedIcon sx={{ fontSize: 40, color: "var(--blue)", backgroundColor: "#1d224421", padding: "3px", borderRadius: "8px" }}/>,
//         heading: "Book a ticket",
//         description: "Ensure a smooth travel experience by booking tickets to your preferred destination via our booking platform",
//    },
//    item03: {
//         muiIcon: <BoltOutlinedIcon sx={{ fontSize: 40, color: "var(--blue)", backgroundColor: "#1d224421", padding: "3px", borderRadius: "8px" }}/>,
//         heading: "Make payment",
//         description: "We offer a variety of payment options to meet your preferences and ensure a hassle-free transaction process",
//     },
//     item04: {
//         muiIcon: <ExploreOutlinedIcon sx={{ fontSize: 40, color: "var(--blue)", backgroundColor: "#1d224421", padding: "3px", borderRadius: "8px" }}/>,
//         heading: "Explore destination",
//         description: "You'll be immersed in a captivating tapestry of sights, sounds and tastes, as you wind your way through the ancient streets",
//     },
// }

// function HowItWorksSection() {
//     return (
//         <section id='howItWorks' className='marginWrap'>
//             <div className='left'>
//                 <div className='wrapper'>
//                     <div className='card'>
//                         <TourSearch className="tourWidget"/>
//                         <span className='caption'>Embark on a journey to find your dream destination, where adventure and relaxation await, creating memories along the way.</span>
//                     </div>
//                 </div>
//             </div>
//             <div className='right'>
//                 <div className='header'>
//                     <span className='subHeader'>How It Works</span>
//                     <h2>One Click for you</h2>
//                 </div>
//                 <div className='list'>
//                 {Object.entries(List).map(([key, item]) => (
//                     <div className='item' key={key}>
//                         <div className='left'>
//                             {item.muiIcon}
//                         </div>
//                         <div className='right'>
//                             <h3>{item.heading}</h3>
//                             <span className='Description'>{item.description}</span>
//                         </div>
//                     </div>
//                  ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default HowItWorksSection;

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './index.scss';
import TourSearch from '../../components/TourSearch';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

gsap.registerPlugin(ScrollTrigger);

const List = {
    item01: {
        muiIcon: <TravelExploreOutlinedIcon sx={{ fontSize: 40, color: "var(--blue)", backgroundColor: "#1d224421", padding: "3px", borderRadius: "8px" }}/>,
        heading: "Find your destination",
        description: "Embark on a journey to discover your dream destination, where adventure and relaxation await",
    },
    item02: {
        muiIcon: <AirplaneTicketOutlinedIcon sx={{ fontSize: 40, color: "var(--blue)", backgroundColor: "#1d224421", padding: "3px", borderRadius: "8px" }}/>,
        heading: "Book a ticket",
        description: "Ensure a smooth travel experience by booking tickets to your preferred destination via our booking platform",
   },
   item03: {
        muiIcon: <BoltOutlinedIcon sx={{ fontSize: 40, color: "var(--blue)", backgroundColor: "#1d224421", padding: "3px", borderRadius: "8px" }}/>,
        heading: "Make payment",
        description: "We offer a variety of payment options to meet your preferences and ensure a hassle-free transaction process",
    },
    item04: {
        muiIcon: <ExploreOutlinedIcon sx={{ fontSize: 40, color: "var(--blue)", backgroundColor: "#1d224421", padding: "3px", borderRadius: "8px" }}/>,
        heading: "Explore destination",
        description: "You'll be immersed in a captivating tapestry of sights, sounds and tastes, as you wind your way through the ancient streets",
    },
}

function HowItWorksSection() {
    useEffect(() => {
        gsap.fromTo(
            "#howItWorks .wrapper",
            { opacity: 0, x: (i) => (i % 2 === 0 ? -100 : 100) },
            {
              opacity: 1,
              x: 0,
              duration: 2,
              ease: "power3.out",
              stagger: 0.5,
              scrollTrigger: {
                trigger: "#howItWorks",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );

        gsap.fromTo(
            "#howItWorks .item", 
            { opacity: 0, x: (i) => (i % 2 === 0 ? -100 : 100) },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".list",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <section id='howItWorks' className='marginWrap'>
            <div className='left'>
                <div className='wrapper'>
                    <div className='card'>
                        <TourSearch className="tourWidget"/>
                        <span className='caption'>Embark on a journey to find your dream destination, where adventure and relaxation await, creating memories along the way.</span>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='header'>
                    <span className='subHeader'>How It Works</span>
                    <h2>One Click for you</h2>
                </div>
                <div className='list'>
                    {Object.entries(List).map(([key, item], index) => (
                        <div className='item' key={key}>
                            <div className='left'>
                                {item.muiIcon}
                            </div>
                            <div className='right'>
                                <h3>{item.heading}</h3>
                                <span className='Description'>{item.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorksSection;
