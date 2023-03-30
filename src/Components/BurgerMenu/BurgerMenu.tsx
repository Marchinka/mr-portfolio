import { faBars, faBurger } from "@fortawesome/free-solid-svg-icons";
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
                  return  <Link className="w3-bar-item w3-button w3-padding-large mr-navbar-link" to={link.link}>
                            {link.label}
                          </Link>
                })}
              </div>
              <div className="small-device-navbar">
                <button className="burger-button" onClick={() => setShowMenu(true)}>
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
              <div className={`link-menu ${showMenu ? "show" : ""}`}>
                <div className={`overlay`} onClick={() => setShowMenu(false)}></div>
                <div className="link-section">
                    {props.links.map(link => {
                      return  <div>
                                <Link className="w3-button w3-padding-large" to={link.link}>
                                  {link.label}
                                </Link>
                              </div>
                    })}
              </div>
              </div>
            </div>);
}