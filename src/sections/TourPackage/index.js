import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './index.scss';
import Btn from '../../components/Button';
import TourCards from './tourCards';

gsap.registerPlugin(ScrollTrigger);

function TourPackage() {
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
        <section id='tourPackage' className='marginWrap' ref={containerRef}>
            <div className="header">
                <div className="left">
                    <span className="subHeader">Tour packages</span>
                    <h2>Our tourist destination</h2>
                </div>
                <div className="right">
                    <p>Our tourist destinations offer an unrivaled blend of natural beauty and cultural richness</p>
                </div>
            </div>
            <TourCards />
            <div className='cta'>
                <Btn text="View more" size="btn-long" colour="black" textCol="white" />
            </div>
        </section>
    );
}

export default TourPackage;
