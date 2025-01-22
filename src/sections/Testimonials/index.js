// import { Avatar } from '@mui/material';
// import './index.scss'
// import EastIcon from '@mui/icons-material/East';
// import WestIcon from '@mui/icons-material/West';
// import { useState } from 'react';




// function Testimonials() {
//     const customerReviews = [
//         {
//             image: "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             name: "Donald Sullivan",
//             designation: "Founder at Fonik",
//             content: "This travel website is very informative and easy to use. I like how they present various destination options and travel packages with clear details. Offering pictures and destination descriptions helps me decide where I want to visit. Additionally, the ability to compare prices and reviews from other users is very helpful in decision making."
//         },
//         {
//             image: "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             name: "Azam",
//             designation: "Founder at Fonik",
//             content: "This travel website is very informative and easy to use. I like how they present various destination options and travel packages with clear details. Offering pictures and destination descriptions helps me decide where I want to visit. Additionally, the ability to compare prices and reviews from other users is very helpful in decision making."
//         },
//     ]

//     const[current, setCurrent] = useState(0)

//     const previous = () => {

//     }

//     const next = () => {

//     }

//     return (
//         <section id="testimonials" className="marginWrap">
//             {customerReviews.map(([key, item]) => 
//                 key === current &&
//                     <div key={key}>
//                         <div className="left">
//                             <div className="customer">
//                                 <Avatar alt="Remy Sharp" src={item.image} sx={{ width: 60, height: 60 }} />
//                                 <div className="right">
//                                     <span className="name">{item.name}</span>
//                                     <span className="designation">{item.designation}</span>
//                                 </div>
//                             </div>
//                             <div className="arrows">
//                                 <WestIcon onClick={previous} sx={{ fontSize: 35 }} />
//                                 <EastIcon onClick={next} sx={{ fontSize: 35 }} />
//                             </div>
//                         </div>
//                         <blockquote>{item.content}</blockquote>
//                     </div>
//             )}
//         </section>
//     );
// }

// export default Testimonials;


import { Avatar } from '@mui/material';
import './index.scss';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { useState } from 'react';

function Testimonials() {
    const customerReviews = [
        {
            image: "https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Donald Sullivan",
            designation: "Founder at Fonik",
            content: "This travel website is very informative and easy to use. I like how they present various destination options and travel packages with clear details. Offering pictures and destination descriptions helps me decide where I want to visit. Additionally, the ability to compare prices and reviews from other users is very helpful in decision making."
        },
        {
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
            name: "Ryan Mitchell",
            designation: "Software Engineer",
            content: "This travel platform exceeded my expectations. The detailed descriptions and user-friendly interface made it so simple to plan my trip. I appreciated the real-time price comparisons and user reviews, which made my decision-making process easier."
        },
        {
            image:"https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Lucas Bennett",
            designation: "Freelancer",
            content: "I found this travel website extremely convenient and easy to navigate. The ability to explore destinations with vivid images and compare options made the process enjoyable. It saved me both time and effort in organizing my trip."
        },
        {
            image: "https://images.unsplash.com/photo-1584940120743-8981ca35b012?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Daniel Thompson",
            designation: "Travel Enthusiast",
            content: "I’ve tried multiple platforms, but this one stands out for its simplicity and reliability. The reviews and images helped me pick the perfect getaway spot. Highly recommended to fellow travelers!"
        }
    ];
    
    const [current, setCurrent] = useState(0);

    const previous = () => {
        setCurrent((prev) => (prev - 1 + customerReviews.length) % customerReviews.length);
    };

    const next = () => {
        setCurrent((prev) => (prev + 1) % customerReviews.length);
    };

    return (
        <section id="testimonials" className="marginWrap">
            {customerReviews.map((item, index) => 
                index === current && (
                    <>
                        <div className="left">
                            <div className="customer">
                                <Avatar alt={item.name} src={item.image} sx={{ width: 60, height: 60 }} />
                                <div className="right">
                                    <span className="name">{item.name}</span>
                                    <span className="designation">{item.designation}</span>
                                </div>
                            </div>
                            <div className="arrows">
                                <WestIcon onClick={previous} sx={{ fontSize: 35 }} />
                                <EastIcon onClick={next} sx={{ fontSize: 35 }} />
                            </div>
                        </div>
                        <blockquote>{item.content}</blockquote>
                    </>
                )
            )}
        </section>
    );
}

export default Testimonials;
