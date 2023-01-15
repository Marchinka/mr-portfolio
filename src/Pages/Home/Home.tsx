import { ContactIcon } from "../../Components/ContactIcon/ContactIcon";
import { MLogo } from "../../Components/MLogo/MLogo";
import { Typography } from "../../Components/Typography/Typography";
import "./Home.scss";

export const Home = () => {
    return <div>
                <div className="hero">
                    <div className="hero-logo">
                        <MLogo />
                    </div>
                    <div className="hero-text">
                        <Typography type="h2">
                            Marcello Rossi
                        </Typography>
                        <Typography type="p">
                            I consider myself an M-shaped person: my areas of expertise are <span className="text bold software">Software Development</span>, <span className="text bold agile">Agile Project Managament</span> and <span className="text bold design">User Experience Design</span>.
                            Beside work I am a passionate yoga practitioner, theater enthusiast and japanese culture lover.
                        </Typography>
                    </div>
                </div>
                <Typography type="p">
                    Currently working at <strong style={{ fontWeight: "bold" }}>Techesge S.p.a. - Italy</strong>
                </Typography>
                <div>
                    <ContactIcon type={"mail"} link={""} />
                    <ContactIcon type={"linkedin"} link={""} />
                    <ContactIcon type={"phone"} link={""} />
                </div>
            </div>
}