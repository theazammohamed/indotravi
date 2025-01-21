import './locationCards.scss'

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


function LocationCards(){
    return (
        <div className="locationCards">
            {Object.entries(Tours).map(([key, item]) => (
                <div className='card' key={key} style={{backgroundImage: `url(${item.link})`}}>
                    <span>{item.location}</span>
                    <h3>{item.name}</h3>
                </div>
          ))}
        </div>
    );
}

export default LocationCards;