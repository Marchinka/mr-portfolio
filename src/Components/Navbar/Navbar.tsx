import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);


    function onScroll() {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    useEffect(() => {
        function watchScroll() {
          window.addEventListener("scroll", onScroll);
        }
        watchScroll();
        return () => {
          window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (<div className="w3-top">
                <div className={`w3-large mr-navbar ${isScrolled ? "mr-navbar-scrolled" : ""}`}>
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