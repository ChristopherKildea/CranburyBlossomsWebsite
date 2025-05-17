import { Link } from "react-router-dom";
import "../css/Navbar.css"


function NavBar() {
    return <nav className="navbar">

    


        <div className="navbar-brand">
            <Link to="/">Weddings + Events</Link>
        </div>

        <div className="navbar-brand">
            <Link to="/">Delivery</Link>
        </div>

        <div className="navbar-title">
            <Link to="/">Cranbury Blossoms</Link>
        </div>

        <div className="navbar-brand">
            <Link to="/">Workshops</Link>
        </div>


        <div className="navbar-brand">
            <Link to="/">Sign In</Link>
        </div>





    </nav>
}

export default NavBar