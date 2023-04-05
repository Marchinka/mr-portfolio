import "./Resume.scss";
import CurriculumVitaePdf from "./../../Resources/Curriculum Vitae - Marcello Rossi.pdf";
import MR_CV_1_svg from "./../../Resources/CV_MR_1.svg";
import MR_CV_2_svg from "./../../Resources/CV_MR_2.svg";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faArrowAltCircleLeft, faEnvelope, faSpinner  } from "@fortawesome/free-solid-svg-icons";
import { ScrollToTop } from "../../Utils/ScrollToTop";

export const Resume = () => {
    const [loaded, setLoaded] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        ScrollToTop();
    }, [])
    
    return  <div className={`animate__animated animate__fadeIn page-content resume`}>
                {!loaded && <div className="loader">
                    <FontAwesomeIcon icon={faSpinner} spin={true} size="6x" className="text muted"/>
                </div>}
                <div style={{display: loaded ? "block" : "none"}}>
                    <div className="pager">
                        <button onClick={() => setPage(1)}><FontAwesomeIcon icon={faAngleLeft} /></button>
                        <span>Page {page}&nbsp;/&nbsp;2</span>{}
                        <button onClick={() => setPage(2)}><FontAwesomeIcon icon={faAngleRight} /></button>
                    </div>
                    <div className="container">
                        <img style={{ display: page == 1 ? "block" : "none" }}src={MR_CV_1_svg} onLoad={e => setLoaded(true)}/>
                        <img style={{ display: page == 2 ? "block" : "none" }}src={MR_CV_2_svg} onLoad={e => setLoaded(true)}/>
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

