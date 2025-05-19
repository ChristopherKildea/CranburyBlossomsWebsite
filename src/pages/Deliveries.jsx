import React, { useState, useEffect } from 'react';
import FlowerCard from '../components/FlowerCard';
import "../css/Deliveries.css"
import DeliveryHeader from '../components/DeliveryHeader';

const Deliveries = () => {
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        fetch('/data/flowers.json')
            .then((response) => response.json())
            .then((data) => setFlowers(data));
    }, []);

    return (

        <div>

            <DeliveryHeader />

            <div className="flower-grid-container">
                <div className="flower-grid">
                    {flowers.map((flower) => (
                        <FlowerCard flower={flower} key={flower.id} />
                    ))}
                </div>
            </div>
        </div>


    );
};

export default Deliveries;
