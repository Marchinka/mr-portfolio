import { ContactIcon } from "../../Components/ContactIcon/ContactIcon";
import { HomeSection } from "../../Components/HomeSection/HomeSection";
import { MLogo } from "../../Components/MLogo/MLogo";
import { Typography } from "../../Components/Typography/Typography";
import "./Home.scss";
import DocumentPlatformImg from "./../../Images/DocumentPlatform.png";
import Project2Img from "./../../Images/Project2.png";
import Project3Img from "./../../Images/Project3.png";
import { ProjectSection } from "../../Components/ProjectSection/ProjectSection";
import { Divider } from "../../Components/Divider/Divider";



export const Home = () => {
    return (
        <div className="mr-home-content">     
            <HomeSection 
                        type="left"
                        icon={<MLogo />}
                        content={<>
                                    <Typography type="h2" color="black">
                                        Marcello Rossi
                                    </Typography>
                                    <Typography type="p">
                                        I consider myself an M-shaped person: my areas of expertise are <Typography type="span" color="software" weight="bold">Software Development</Typography>, <Typography type="span" color="agile" weight="bold">Agile Project Managament</Typography> and <Typography type="span" color="design" weight="bold">User Experience Design</Typography>.
                                        Beside work I am a passionate yoga practitioner, theater enthusiast and japanese culture lover.
                                    </Typography>
                                </>} />

                <div>
                    <ContactIcon type={"mail"} link={""} />
                    <ContactIcon type={"linkedin"} link={""} />
                    <ContactIcon type={"phone"} link={""} />
                </div>

                <div style={{textAlign: "center"}}>
                    <Typography type="p">
                        Currently working at <strong style={{ fontWeight: "bold" }}>Techesge S.p.a. - Italy</strong>
                    </Typography>
                </div>

                <Divider />

                <ProjectSection title={"Document Platform"} 
                                subTitle={"DOCUMENT REPOSITORY REDESIGN"} 
                                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} 
                                img={<img src={DocumentPlatformImg} alt="M" style={{width: "100%"}} />} />

                <Divider />

                <ProjectSection title={"Project 2"} 
                                subTitle={"DOCUMENT REPOSITORY REDESIGN"} 
                                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} 
                                img={<img src={Project2Img} alt="M" style={{width: "100%"}} />} />

                <Divider />
                
                <ProjectSection title={"Project 3"} 
                                subTitle={"DOCUMENT REPOSITORY REDESIGN"} 
                                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} 
                                img={<img src={Project3Img} alt="M" style={{width: "100%"}} />} />


            {/* <HomeSection 
                        type="right"
                        icon={<i className="fa fa-coffee w3-padding-64 w3-text-red w3-margin-right"></i>}
                        content={<>
                                    <h1>HERO</h1>
                                    <h5 className="w3-padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>
                        
                                    <p className="w3-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </>} /> */}
            

    
{/*     
            <div className=" w3-black w3-center w3-opacity w3-padding-64">
                <h1 className="w3-margin w3-xlarge">Quote of the day: live life</h1>
            </div>
    
            <footer className=" w3-padding-64 w3-center w3-opacity">  
              <div className="w3-xlarge w3-padding-32">
                <i className="fa fa-facebook-official w3-hover-opacity"></i>
                <i className="fa fa-instagram w3-hover-opacity"></i>
                <i className="fa fa-snapchat w3-hover-opacity"></i>
                <i className="fa fa-pinterest-p w3-hover-opacity"></i>
                <i className="fa fa-twitter w3-hover-opacity"></i>
                <i className="fa fa-linkedin w3-hover-opacity"></i>
            </div>
            <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
            </footer> */}
        </div>
      );
}