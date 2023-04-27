import "./Resume.scss";
import CurriculumVitaePdf from "./../../Resources/Curriculum Vitae - Marcello Rossi.pdf";
import MR_CV_1_svg from "./../../Resources/CV_MR_1.svg";
import MR_CV_2_svg from "./../../Resources/CV_MR_2.svg";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faArrowAltCircleLeft, faEnvelope, faSpinner  } from "@fortawesome/free-solid-svg-icons";
import { ScrollToTop } from "../../Utils/ScrollToTop";
import { Flex } from "../../Components/Flex/Flex";
import { trackEvent, usePageView } from "../../Utils/Analytics";

export const Resume = () => {
    const [loaded, setLoaded] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        ScrollToTop();
    }, []);

    usePageView("/resume", "Resume");

    const changePage = (num: number) => {
        trackEvent("resume",  `resume:pager`);
        setPage(num);
    };
    
    return  <div className={`animate__animated animate__fadeIn page-content resume`}>
                {!loaded && <div className="loader">
                    <FontAwesomeIcon icon={faSpinner} spin={true} size="6x" className="text muted"/>
                </div>}
                <Flex justify="center" align="center" >
                        <button className={`w3-button w3-round w3-mr-lifted ${page == 2 ? "w3-white" : "w3-mr-black"}`} onClick={() => changePage(1)}>Page 1</button>
                        &nbsp;&nbsp;&nbsp;
                        <button className={`w3-button w3-round w3-mr-lifted  ${page == 1 ? "w3-white" : "w3-mr-black"}`} onClick={() => changePage(2)}>Page 2</button>
                    </Flex>
                    <br />
                <div style={{display: loaded ? "block" : "none"}}>
                    <div className="container">
                        <img style={{ display: page == 1 ? "block" : "none" }}src={MR_CV_1_svg} onLoad={e => setLoaded(true)}/>
                        <img style={{ display: page == 2 ? "block" : "none" }}src={MR_CV_2_svg} onLoad={e => setLoaded(true)}/>
                        {/* <iframe src={CurriculumVitaePdf} /> */}
                    </div>
                    
                    <div className="download-area">
                        <a  className={`w3-button w3-large w3-mr-black w3-round w3-mr-lifted`}
                            onClick={() => trackEvent("resume",  `resume:download`)}
                            href={CurriculumVitaePdf} target="_blank" 
                            download="Curriculum Vitae - Marcello Rossi.pdf"> 
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
}

