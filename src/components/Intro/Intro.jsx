import "./Intro.scss";
import { images } from "../../constants/index.js";
import {NavbarDemo} from "../Navbar/Navbar.jsx";

const Intro = () => {
    return (
        <div className="intro-section">
            <NavbarDemo />

            <div className="content-container">
                {/* Image collage - left side */}
                <div className="collage-left">
                    <div className="collage-container">
                        <img src={images.intro1} alt="Person relaxing" className="collage-image image-1" />
                        <img src={images.intro2} alt="Person working on laptop" className="collage-image image-2" />
                    </div>
                </div>

                {/* Main content */}
                <div className="main-content">
                    <h1 className="headline">
                        A WORLD-CLASS
                        <br />
                        READING, WATCHING,
                        <br />
                        AND LISTENING
                        <br />
                        EXPERIENCE
                    </h1>
                </div>

                {/* Image collage - right side */}
                <div className="collage-right">
                    <div className="collage-container">
                        <img src={images.intro3} alt="People in meeting" className="collage-image image-3" />
                        <img src={images.intro4} alt="Person typing on laptop" className="collage-image image-4" />
                        <img src={images.intro5} alt="Laptop with coffee" className="collage-image image-5" />
                    </div>
                </div>

                {/* Small images in the middle */}
                <div className="collage-middle">
                    <img src={images.intro6} alt="Small workspace" className="collage-image image-6" />
                    <img src={images.intro7} alt="Small workspace" className="collage-image image-7" />
                </div>
            </div>
        </div>
    );
};

export default Intro;
