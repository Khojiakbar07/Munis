import "./Navbar.scss";
import { images } from "../../constants/index.js";
import { useState } from "react";

const Navbar = () => {
    const [language, setLanguage] = useState("en");

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        // Add localization integration here if using i18next, etc.
    };

    return (
        <nav className="navbar">
            <div className="logo-container">
                <img className="logo" src={images.logo2} alt="Logo" />
            </div>

            <div className="nav-links">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">Products</a>
                <a href="#" className="nav-link">Articles</a>
            </div>

            <div className="navbar-right">
                <select className="lang-switcher" value={language} onChange={handleLanguageChange}>
                    <option value="en">EN</option>
                    <option value="ru">RU</option>
                    <option value="uz">UZ</option>
                </select>

                <button className="creator-button">CONTACT US</button>
            </div>
        </nav>
    );
};

export default Navbar;
