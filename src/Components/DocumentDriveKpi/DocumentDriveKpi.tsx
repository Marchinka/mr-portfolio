import { Kpi } from '../../Components/Kpi/Kpi';
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