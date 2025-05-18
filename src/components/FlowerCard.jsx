import { Link } from "react-router-dom";
import "../css/FlowerCard.css"


function FlowerCard({ flower }) {
    return <div className="flower-card">


        <img src={flower.image} alt={flower.name} style={{ width: '90%' }} />
        <p className="flower-title">{flower.name}</p>
        <p className="flower-price">${flower.price.toFixed(2)}</p>


    </div>




}

export default FlowerCard