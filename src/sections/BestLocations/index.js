import gsap from 'gsap';
import './index.scss'
import LocationCards from './locationCards';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function BestLocations() {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.subHeader', {
        scrollTrigger: {
          trigger: '.subHeader', 
          start: 'top 80%', 
          toggleActions: 'play none none reverse', 
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from('.left h2', {
        scrollTrigger: {
          trigger: '.left h2',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power2.out',
        delay: 0.3,
      });

      gsap.from('.right p', {
        scrollTrigger: {
          trigger: '.right p',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power2.out',
        delay: 0.6,
      });
    }, containerRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <section id="bestLocation" className='marginWrap' ref={containerRef}>
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