import { Link } from "react-router-dom";
import "../css/Navbar.css"


function FlowerCard({ flower }) {
    return <div>


        <img src={flower.image} alt={flower.name} width={100} />
        <h2>{flower.name}</h2>
        <p>${flower.price.toFixed(2)}</p>
        <p>{flower.description}</p>


    </div>




}

export default FlowerCard