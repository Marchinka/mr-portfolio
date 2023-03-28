import "./Resume.scss";
import CurriculumVitaePdf from "./../../Resources/Curriculum Vitae - Marcello Rossi.pdf";
import CurriculumVitaeSvg from "./../../Resources/Curriculum Vitae - Marcello Rossi.svg";

export const Resume = () => {
    return  <div className={`animate__animated animate__fadeIn page-content resume`}>
                <div className="container">
                    <img src={CurriculumVitaeSvg} />
                    {/* <iframe src={CurriculumVitaePdf} /> */}
                </div>
                <div className="download-area">
                    <a className={`w3-button w3-large w3-mr-black w3-round w3-mr-lifted`}
                        href={CurriculumVitaePdf} target="_blank" download="Curriculum Vitae - Marcello Rossi.pdf"> 
                        Download Resume
                    </a>
                </div>
            </div>
}

