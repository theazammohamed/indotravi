import './index.scss'
import Btn from '../../components/Button' 
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function Blog() {
    const Articles = {
        item01: {
            image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Nov 14, 2022",
            name: "2023 Travel Trends - what you need to know",
            description: "2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is key, a..."
        },
        item02: {
            image: "https://images.unsplash.com/photo-1507242541385-02de954f97e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Nov 18, 2022",
            name: "Jeep Adventure is a new attraction for tourists visiting Garut",
            description: "Jeep Adventure is one of the tourist attractions that has been popular recently. The sensation..."
        },
        item03: {
            image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Aug 18, 2022",
            name: "Eco-friendly travel: Make a difference",
            description: "Discover how you can travel responsibly while exploring the world. From eco-lodges to sustainable..."
        },
        item04: {
            image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Nov 14, 2022",
            name: "2023 Travel Trends - what you need to know",
            description: "2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is key, a..."
        },
        
    }

    useEffect(() => {
        gsap.fromTo(
            "#blog .blogCards .card",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2, 
                scrollTrigger: {
                    trigger: "#blog",
                    start: "top 80%", 
                    end: "bottom 20%",
                    toggleActions: "play none none reverse", 
                },
            }
        );

        gsap.fromTo(
            "#blog .header .subHeader", 
            { opacity: 0, y: 50 }, 
            {
                opacity: 1,
                y: 0, 
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#blog",
                    start: "top 80%", 
                    end: "bottom 20%",
                    toggleActions: "play none none reverse", 
                },
            }
        );
    }, []);

    return (
        <section id='blog' className='marginWrap'>
            <div className="header">
                <span className="subHeader">Our Blog</span>
                <h2>Our Travel Memories</h2>
            </div>
            <div className='blogCards'>
                    {Object.entries(Articles).map(([key, item]) => (
                        <div className='card'>
                            <img alt={item.name} src={item.image}/>
                            <div className='details'>
                                <span className='date'>{item.date}</span>
                                <h3>{item.name}</h3>
                                <span className='description'>{item.description}</span>
                            </div>
                        </div>
                    ))}
            </div>
            <div className='cta'>
                <Btn text="View more" size="btn-long" colour="black" textCol="white"/>
            </div>
        </section>
    );
}

export default Blog;