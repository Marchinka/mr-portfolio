import { Kpi } from '../../Components/Kpi/Kpi';
import { TeamElement } from '../../Components/TeamElement/TeamElement';
import { Typography } from '../../Components/Typography/Typography';
import { ProjectModel } from '../../Utils/ProjectModel';
import MdIntro from './1-DocumentDrive-Intro.md';
import MdBody from './2-DocumentDrive-Body.md';

            
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
      