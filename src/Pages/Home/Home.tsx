import { Contact } from "../../Components/Contact/Contact";
import { HomeSection } from "../../Components/HomeSection/HomeSection";
import { MLogo } from "../../Components/MLogo/MLogo";
import { Typography } from "../../Components/Typography/Typography";
import "./Home.scss";
import DocumentPlatformImg from "./../../Images/DocumentPlatform.png";
import Project2Img from "./../../Images/Project2.png";
import Project3Img from "./../../Images/Project3.png";
import { Skill } from "../../Components/Skill/Skill";
import { Divider } from "../../Components/Divider/Divider";
import { ProjectSection } from "../../Components/PortfolioProjectCard/PortfolioProjectCard";

const CSS_ANIMATION_CLASS = "animate__animated animate__fadeIn animate__delay-1s";
const CSS_CLASS_ROWS = `w3-row`;
const CSS_CLASS_ROWS_ANIMATION = `${CSS_CLASS_ROWS} ${CSS_ANIMATION_CLASS}`;

export const Home = () => {
    return (
        <div className="mr-home-content page-content">     
            <HomeSection 
                        type="left"
                        icon={<div className="animate__animated animate__fadeIn"><MLogo /></div>}
                        content={<div className="home-hero-text">
                                    <br />
                                    <Typography type="h2" color="black" className="animate__animated animate__bounceInRight animate__delay-02s">
                                        Marcello Rossi
                                    </Typography>
                                    <Typography type="p" className="animate__animated animate__bounceInRight animate__delay-04s">
                                        I consider myself an M-shaped person: my areas of expertise are <Typography type="span" color="software" weight="bold">Software Development</Typography>, <Typography type="span" color="agile" weight="bold">Agile Project Managament</Typography> and <Typography type="span" color="design" weight="bold">User Experience Design</Typography>.
                                        Beside work I am a passionate yoga practitioner, theater enthusiast and japanese culture lover.
                                    </Typography>
                                </div>} />


                <div className={CSS_CLASS_ROWS_ANIMATION}>
                    <div className="w3-col s4 m4 l4">
                        <Contact 
                                type="mail" 
                                link="mailto:marc89rossi@gmail.com" 
                                label="marc89rossi@gmail.com"/>
                    </div>
                    <div className="w3-col s4 m4 l4">
                        <Contact 
                                type="linkedin" 
                                link="https://www.linkedin.com/in/marcello-rossi-40301594/" 
                                label="linkedin.com" />
                    </div>
                    <div className="w3-col s4 m4 l4">
                        <Contact 
                                type="phone" 
                                link="tel:+393473914704" 
                                label="+39 347 39 14 704" />
                    </div>
                </div>

                <div className={CSS_CLASS_ROWS_ANIMATION}>
                    <div className="w3-col s12 m6 l3">
                        <Skill 
                                    type="agile" 
                                    kpi="8"
                                    title="Years"
                                    subTitle="work experience in IT projects"/>
                    </div>
                    <div className="w3-col s12 m6 l3">
                        <Skill 
                                type="design" 
                                kpi="3"
                                title="Areas of Expertise"
                                subTitle="programming, agile and design"/>
                    </div>
                    <div className="w3-col s12 m6 l3">
                        <Skill 
                                type="software" 
                                kpi="24"
                                title="Projects"
                                subTitle="followed during in my whole career"/>

                    </div>
                    <div className="w3-col s12 m6 l3">
                        <Skill 
                                type="agile" 
                                kpi="12"
                                title="Certifications"
                                subTitle={<span>between cloud, agile and design <Typography weight="bold">(click to show)</Typography></span>}/>

                    </div>
                </div>
                <div style={{textAlign: "center"}} className={CSS_CLASS_ROWS_ANIMATION}>
                    <Typography type="p">
                    Currently working at <strong style={{ fontWeight: "bold" }}>Techesge S.p.a. - Italy</strong>

                    </Typography>
                </div>

                <Divider className={CSS_CLASS_ROWS_ANIMATION} />

                <ProjectSection title={"Document Platform"} color="agile" route="/document-drive"
                                subTitle={"DOCUMENT REPOSITORY REDESIGN"} 
                                classname={CSS_CLASS_ROWS_ANIMATION}
                                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} 
                                img={<img src={DocumentPlatformImg} alt="M" style={{width: "100%"}} />} />

                <Divider className={CSS_CLASS_ROWS_ANIMATION} />

                <ProjectSection title={"Project 2"}  color="software" route="/"
                                subTitle={"DOCUMENT REPOSITORY REDESIGN"}
                                classname={CSS_CLASS_ROWS_ANIMATION} 
                                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} 
                                img={<img src={Project2Img} alt="M" style={{width: "100%"}} />} />

                <Divider className={CSS_CLASS_ROWS_ANIMATION} />
                
                <ProjectSection title={"Project 3"} color="design" route="/"
                                subTitle={"DOCUMENT REPOSITORY REDESIGN"} 
                                classname={CSS_CLASS_ROWS_ANIMATION}
                                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} 
                                img={<img src={Project3Img} alt="M" style={{width: "100%"}} />} />


        </div>
      );
}