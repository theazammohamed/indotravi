import './locationCards.scss'
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Tours = {
    tour01: {
        name: "Bromo tengger Tour",
        location: "Bromo, East Java",
        link:"https://images.unsplash.com/photo-1555773744-f6c0d85cdce2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    tour02: {
        name: "Bali Beach Tourism",
        location: "Denpasar, Bali",
        link:"https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    tour03: {
        name: "Sumatra Tourism",
        location: "Lampung, South Sumatra",
        link:"https://images.unsplash.com/photo-1626696445855-5f1f90db7ae8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    tour04: {
        name: "Borobudur Temple Tour",
        location: "Jogjakarta, Central Java",
        link:"https://images.unsplash.com/photo-1620549146260-938c38c31c13?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
}



// function LocationCards(){
//     return (
//         <div className="locationCards">
//             {Object.entries(Tours).map(([key, item]) => (
//                 <div className='wrapper' style={{backgroundImage: `url(${item.link})`}} key={key}>
//                     <div className='card'>
//                         <span>{item.location}</span>
//                         <h3>{item.name}</h3>
//                     </div>
//                 </div>
//           ))}
//         </div>
//     );
// }

// export default LocationCards;

gsap.registerPlugin(ScrollTrigger);

function LocationCards() {
  useEffect(() => {
    gsap.fromTo(
      ".locationCards .wrapper",
      { opacity: 0, x: (i) => (i % 2 === 0 ? -100 : 100) },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power3.out",
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".locationCards",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="locationCards">
      {Object.entries(Tours).map(([key, item]) => (
        <div
          className="wrapper"
          style={{ backgroundImage: `url(${item.link})` }}
          key={key}
        >
          <div className="card">
            <span>{item.location}</span>
            <h3>{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LocationCards;
