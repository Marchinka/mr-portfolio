import "./Resume.scss";
import CurriculumVitae from "./../../Images/Curriculum Vitae - Marcello Rossi.pdf";

export const Resume = () => {
    return  <div className={`animate__animated animate__fadeIn page-content resume`}>
                <iframe src={CurriculumVitae} frameBorder={"0"}></iframe>
            </div>
}

