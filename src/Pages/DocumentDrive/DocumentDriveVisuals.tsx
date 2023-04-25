import { Pill as Pill } from '../../Components/Pill/Pill';
import { Kpi } from '../../Components/Kpi/Kpi';
import { TeamElement } from '../../Components/TeamElement/TeamElement';
import { Typography } from '../../Components/Typography/Typography';
import { ProjectModel } from '../../Utils/ProjectModel';
import MdIntro from './1-DocumentDrive-Intro.md';
import MdBody from './2-DocumentDrive-Body.md';
import { Persona } from '../../Components/Persona/Persona';

import OperationalGeologist from "./../../Images/Operational_Geologist.svg";
import HQGeologist from "./../../Images/HQ_Geologist.svg";
import ICTAdmin from "./../../Images/ICT_Admin.svg";
            
export const DocumentDriveKpis = () => {
    return <div className={"w3-row"}>
            <div className="w3-col s12 m12 l4">
                <Kpi 
                            type="design" 
                            kpi="3k"
                            title="Users"
                            subTitle="working on the platform on 12 different professional areas"/>
            </div>
            <div className="w3-col s12 m12 l4">
                <Kpi 
                        type="agile" 
                        fontSize="24px"
                        kpi="600k"
                        title="Documents"
                        subTitle="to make accessible form older platform"/>
            </div>
            <div className="w3-col s12 m12 l4">
                <Kpi 
                        type="software" 
                        kpi="25"
                        title="Tb"
                        subTitle="of physical files to migrate, index and expose via full-text search"/>

            </div>
        </div>
}

export const DocumentDriveHighlights = () => {
    return <div className={"w3-row"}>
            <div className="w3-col s12 m12 l4">
                <Pill  title="Customer" subTitle="Major italian energy company" />
            </div>
            <div className="w3-col s12 m12 l4">
                <Pill title="Timeline" subTitle="2023, one year project" />
            </div>
            <div className="w3-col s12 m12 l4">
                <Pill title="My Role" subTitle="Scrum Master, coordinating developers and designers." />

            </div>
        </div>
}

// Old Platform Painpoints:

// - **Bad and overcomplicated** profile management
// - **Obsolete** user interface
// - Missing functionalities (see below)

// User needs & goals:

// - Easy to use interface with intuitive navigation
// - Improved profile management to streamline the process of accessing and using the platform
// - **Digital signature** capabilities to facilitate secure and efficient document management
// - Integration with at least 10 company applications to ingest data and user information. The user experience between all of these applicaions must fill the same for the user.
// - Ability to **categorize and organize documents** according to the 12 professional areas of expertise within the company
// - Robust **search capabilities** to quickly find relevant documents
// - Integration with Microsoft Teams, allowing users to choose files from their Teams channels and access the platform as a Teams app

 
export const DocumentDrivePersonas = () => {
    return <div className={"w3-row"}>
            <div className="w3-col s12 m12 l4">
                <Persona name='Operational Geologist'
                        color="agile"
                        description="Reservoir, geology or seismic expert. He uses the platform for recovering and consult operational procedures, company guidelines or study of previous projects."
                        painPoints={[
                            "Obsolete user interface",
                            "Missing functionalities"
                        ]}
                        goals={[
                            "Easy to use interface with intuitive navigation",
                            "Robust search capabilities to quickly find relevant documents"
                        ]} img={OperationalGeologist}
                />
            </div>
            <div className="w3-col s12 m12 l4">
                <Persona name='Geology Department Manager'
                        color="software"
                        description="Responsible for a whole proessional area of geologists. He manages and organize people and process and uses the platform as areferences point for all procedures."
                        painPoints={[
                            "Onboarding process on the platform for new users is time consuming"
                        ]}
                        goals={[
                            "Authonomy in categorizing and organize documents",
                            "Optimization of document recovery and consultation"
                        ]} img={HQGeologist}
                />
            </div>
            <div className="w3-col s12 m12 l4">
                <Persona name='ICT Admin'
                        color="design"
                        description="Platform admin, responsible for addressing problems and make the evolution fo the product both substainable and in respect of the end users needs."
                        painPoints={[
                            "Bad and overcomplicated profile management",
                            "Frequent helpdesk support for unclear unser experience"
                        ]}
                        goals={[
                            "Improved profile management for accessing and using the platform"
                        ]} img={ICTAdmin}
                />
            </div>
        </div>
}
           
export const DocumentDriveTeam = () => {
    return <>
            <div className={"w3-row"}>
                <div className="w3-col s12 m12 l4">
                    <TeamElement icon='Tie'
                                    type="agile" 
                                    number="1"
                                    title="Scrum Master"
                                    subTitle={<strong className='u agile '>me</strong>}/>
                </div>
                <div className="w3-col s12 m12 l4">
                    <TeamElement  icon='Tie'
                                    type="design" 
                                    number="2"
                                    title="UX Designers"
                                    subTitle="Andrea Caporale. Francesco Villa. Microsoft"/>
                </div>
            </div>
            <div className={"w3-row"}>
                <div className="w3-col s12 m12 l4">
                <TeamElement  icon='User'
                                type="software" 
                                number="1"
                                title="Senior Dev Lead"
                                subTitle="Francesco Cardin. Techedge"/>
                </div>
                <div className="w3-col s12 m12 l4">
                <TeamElement  icon='User'
                                type="software" 
                                number="1"
                                title="Azure cloud expert"
                                subTitle="Stefano Campanella. Techedge"/>
                </div>
                <div className="w3-col s12 m12 l4">
                <TeamElement  icon='Mob'
                                type="software" 
                                number="6"
                                title="Software Developers"
                                subTitle="Emanuele Serrao, Giuseppe Campanella, Davide Ferri, Andrea Pasquali, Stefano Ruga. Techedge."/>
 
                </div>
            </div>
        </>
}
      