import { faBars, faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./BurgerMenu.scss";

interface Props {
  children: any;
}

export const BurgerMenu = (props: Props) => {
    const [showMenu, setShowMenu] = useState(false);


    return (<div>
              <div className="big-device-navbar">
                {props.children}
              </div>
              {/* <div className="small-device-navbar">
                <button className="burger-button" onClick={() => setShowMenu(true)}>
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div> */}
              {/* <div className="overlay">
                {props.children}
              </div> */}
            </div>);
}