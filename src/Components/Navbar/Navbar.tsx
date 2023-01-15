import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
    return  <div className="navbar">
                <div className="navbar-logo">
                    <span>m.r.</span>
                </div>
                <div className="navbar-links">
                    <Link className="link" to="/"><span>Portfolio</span></Link>
                    <Link className="link" to="/resume">Resume</Link>
                </div>
            </div>
}