import "./Contact.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope  } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

type Type = "mail" | "linkedin" | "phone";


export const Contact = (props: { type: Type, link: string, label: string }) => {

    const getIcon = () => {
        switch (props.type) {
            case "mail":
                return <FontAwesomeIcon icon={faEnvelope} />;
            case "linkedin":
                return <FontAwesomeIcon icon={faLinkedinIn} />;
            case "phone":
            default:
                return <FontAwesomeIcon icon={faPhone} />;
        }
    }

    return  <a className="containt-item-containert" href={props.link} target="_blank">
                <div className="icon-border">
                    {getIcon()}
                </div>
                <div>
                    {props.label}
                </div>
            </a>
}