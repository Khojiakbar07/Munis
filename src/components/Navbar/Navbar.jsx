import "./Navbar.scss"
import {images} from "../../constants/index.js";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                {/* Star logo */}
                <img className="logo" src={images.logo2}/>
            </div>

            <div className="nav-links">
                <a href="#" className="nav-link">
                    Articles
                </a>
                <a href="#" className="nav-link">
                    Authors
                </a>
                <a href="#" className="nav-link">
                    Pricing
                </a>
                <a href="#" className="nav-link">
                    Contact Us
                </a>
            </div>

            <div>
                <button className="creator-button">BECOME A CREATOR</button>
            </div>
        </nav>
    )
}

export default Navbar
