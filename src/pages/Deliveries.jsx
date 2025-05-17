import React, { useState, useEffect } from 'react';
import FlowerCard from '../components/FlowerCard';

const Deliveries = () => {
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        fetch('/data/flowers.json')
            .then((response) => response.json())
            .then((data) => setFlowers(data));
    }, []);

    return (


        <div>
            {flowers.map((flower) => (
                <FlowerCard flower={flower} key={flower.id} />
            ))}
        </div>
    );
};

export default Deliveries;
