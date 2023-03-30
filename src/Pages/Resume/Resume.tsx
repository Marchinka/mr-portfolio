import "./Resume.scss";
import CurriculumVitaePdf from "./../../Resources/Curriculum Vitae - Marcello Rossi.pdf";
import CurriculumVitaeSvg from "./../../Resources/Curriculum Vitae - Marcello Rossi.svg";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSpinner  } from "@fortawesome/free-solid-svg-icons";
import { ScrollToTop } from "../../Utils/ScrollToTop";

export const Resume = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        ScrollToTop();
    }, [])
    
    return  <div className={`animate__animated animate__fadeIn page-content resume`}>
                {!loaded && <div className="loader">
                    <FontAwesomeIcon icon={faSpinner} spin={true} size="6x" className="text muted"/>
                </div>}
                <div style={{display: loaded ? "block" : "none"}}>
                    <div className="container">
                        <img src={CurriculumVitaeSvg} onLoad={e => setLoaded(true)}/>
                        {/* <iframe src={CurriculumVitaePdf} /> */}
                    </div>
                    <div className="download-area">
                        <a className={`w3-button w3-large w3-mr-black w3-round w3-mr-lifted`}
                            href={CurriculumVitaePdf} target="_blank" download="Curriculum Vitae - Marcello Rossi.pdf"> 
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
}

