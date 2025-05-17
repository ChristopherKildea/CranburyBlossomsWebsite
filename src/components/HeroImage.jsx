import { Link } from "react-router-dom";
import "../css/Navbar.css"
import hero_image from "../assets/hero_image.jpeg"
import "../css/HeroImage.css"


const HeroImage = () => {
    return (
        <div className="hero-image-container">
            <img src={hero_image} className="hero-image" />
            <div className="hero-text">
                <h2>Cranbury Blossoms</h2>
                <p>Wedding + Event Floral Design</p>
            </div>
        </div>
    );
};

export default HeroImage;