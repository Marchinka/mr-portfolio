import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
    return (<div className="w3-top">
                <div className="w3-large mr-navbar">
                    <div>
                        <Link className="w3-bar-item w3-button w3-padding-large mr-navbar-logo" to="/">m.r.</Link>
                    </div>
                    <div>
                        <Link className="w3-bar-item w3-button w3-padding-large mr-navbar-link" to="/">Portfolio</Link>
                        <Link className="w3-bar-item w3-button w3-padding-large mr-navbar-link" to="/resume">Resume</Link>
                    </div>
                </div>
            </div>);
}