import { faBars, faBurger, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.scss";

interface Props {
  links: { label: string, link: string }[]
}

export const BurgerMenu = (props: Props) => {
    const [showMenu, setShowMenu] = useState(false);


    return (<div>
              <div className="big-device-navbar">
                {props.links.map(link => {
                  return  <Link key={link.label} className="w3-bar-item w3-button w3-padding-large mr-navbar-link" to={link.link}>
                            {link.label}
                          </Link>
                })}
              </div>
              <div className="small-device-navbar">
                <button className={`burger-button`} onClick={() => setShowMenu(true)}>
                  <FontAwesomeIcon icon={showMenu ? faClose : faBars} />
                </button>
              </div>
              <div className={`link-menu ${showMenu ? "show" : ""}`}>
                <div className={`overlay`} onClick={() => setShowMenu(false)}></div>
                <div className="link-section">
                    {props.links.map(link => {
                      return  <Link className="w3-button w3-padding-large mobile-link" to={link.link}
                      key={link.label} 
                                    onClick={() => setShowMenu(false)}>
                                  {link.label}
                              </Link>
                    })}
                    <hr />
                    <a className="w3-button w3-padding-large mobile-link text muted"
                                    onClick={() => setShowMenu(false)}>
                                  <FontAwesomeIcon icon={faClose} /> <span>Close</span>
                    </a>
              </div>
              </div>
            </div>);
}