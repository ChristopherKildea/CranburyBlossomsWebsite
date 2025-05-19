import { Link } from "react-router-dom";
import "../css/DeliveryHeader.css"
import FlowerThumbmail from "../assets/FlowerThumbnail.jpeg"


function DeliveryHeader() {
    return <div className="DeliveryHeader">

        <img src={FlowerThumbmail} />

        <p>Flower Delivery</p>

    </div>
}

export default DeliveryHeader