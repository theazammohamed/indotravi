import { ScrollTrigger } from 'gsap/all';
import './tourCards.scss'
import StarIcon from '@mui/icons-material/Star';
import gsap from 'gsap';
import { useEffect } from 'react';

const Packages = {
    item01: {
        image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        days: "7 Days",
        rating: "4.5",
        date: "23 AUGUST - 28 AUGUST",
        name: "Bali Tour Package",
        price: "285"
    },
    item02: {
        image: "https://images.unsplash.com/photo-1726621074167-f879167f9e7f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        days: "5 Days",
        rating: "4.9",
        date: "23 AUGUST - 27 AUGUST",
        name: "Java Tour Package",
        price: "218"
    },
    item03: {
        image: "https://images.unsplash.com/photo-1657766336563-6e6e57239311?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        days: "3Days",
        rating: "3.8",
        date: "23 AUGUST - 01 SEPTEMBER",
        name: "Solo Tour Package",
        price: "163"
    },
    item04: {
        image: "https://images.unsplash.com/photo-1532186651327-6ac23687d189?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        days: "3 Days",
        rating: "4.0",
        date: "23 APRIL - 28 APRIL",
        name: "Temple Tour Package",
        price: "185"
    },
}

gsap.registerPlugin(ScrollTrigger);

function TourCards() {
    useEffect(() => {
        gsap.utils.toArray('#tourCards .wrapper').forEach((wrapper, index) => {
            gsap.fromTo(
                wrapper,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: wrapper,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });
    }, []);

    return (
        <div id='tourCards'>
            {Object.entries(Packages).map(([key, item]) => (
                <div className='wrapper' style={{ backgroundImage: `url(${item.image})`}} key={key}>
                <div className='card'>
                     <div className='top'>
                         <span className='days'>
                             {item.days}
                         </span>
                         <span className='rating'>
                             <StarIcon sx={{ fontSize: 13, color: "yellow" }}/>
                             <span>{item.rating}</span>
                         </span>
                     </div>
                     <div className='bottom'>
                         <div className='left'>
                             <span className='fromTo'>{item.date}</span>
                             <h3 className='name'>{item.name}</h3>
                         </div>
                         <div className='right'>
                             <span className='price'>${item.price}</span>
                         </div>
                     </div>
                 </div>    
             </div>
          ))}            
        </div>
    );
}

export default TourCards;