import { EventProps } from "./Timeline";

import TechegdeLogoImg from "./../../Images/Techedge-Logo.png";
import AltranLogoImg from "./../../Images/Altran-Logo.png";
import BicoccaLogoImg from "./../../Images/Bicocca-Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faBuildingWheat, faCode, faGlasses, faGraduationCap, faLocationDot, faMedal, faProcedures, faProjectDiagram, faSchool } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

// $software: #a54c3c;
// $agile: #1a6a6a;
// $design: #557a61;

const colorVariables = {
    black: "#313131",
    muted: "#4B5C71",
    lightGrey: "#5b5b5c",
    background: "#EDEDEE",
    innerColor: "#FFFFFF",
    software: "#a54c3c",
    agile: "#1a6a6a",
    design: "#557a61"
};

const contentBackground = colorVariables.innerColor;
const iconBackground = colorVariables.background;
const iconColor = colorVariables.muted;
const companyBorderColor = colorVariables.agile;
const experienceBorderColor = colorVariables.design;
const projectBorderColor = colorVariables.software;
export const lineColor = "#bfbfbf";
export const arrowColor = colorVariables.muted;

export const timelineEvents: EventProps[] = [
    {
        position: "left",
        date: "2017 - present",
        title: `Techedge S.p.A.`,
        contentBorderColor: companyBorderColor,
        contentBackgroundColor: contentBackground,
        content: `Via Caldera 21, Milan, Italy`,
        icon: <FontAwesomeIcon icon={faBriefcase} />,
        iconColor: iconColor,
        iconBackgroundColor: iconBackground
    },
    {
        position: "right",
        contentBorderColor: experienceBorderColor,
        contentBackgroundColor: contentBackground,
        date: "2020 - present",
        title: `Deputy Practice Manager`,
        content: `I currently work as a team leader in Techedge's Mobile & Cloud department. I am a senior full-stack developer, and I am also responsible for designing applications (both technically and functionally), project management, supervising project budgets, and conceiving cloud architectures. 
        Finally, I lead a team of 30 people, for whom I am responsible in terms of technical training and personal mentorship.
        I am a  fervent sustainer of agile project management, a passionate software developer, and a strong believer in the importance of interdisciplinarity.`,
        icon: <FontAwesomeIcon icon={faBriefcase} />,
        iconColor: iconColor,
        iconBackgroundColor: iconBackground
    },
    {
        position: "right",
        contentBorderColor: experienceBorderColor,
        contentBackgroundColor: contentBackground,
        date: "2017 - 2020",
        title: `Senior Consultant`,
        content: `During my first two years in Techedge, I worked as a senior software 
        engineer and technical lead. I was one of the first developers in my area 
        and I had the objective of forming a team to supply the growing demand 
        in Milan’s office. At the end of these two years, the team counted eight 
        developers I personally interviewed and trained to become full-stack
        developers. The involved technologies were .NET, C#, java, javascript,
        and SQL. Regarding the organization of work activities, I was inspired by 
        Agile, Scrum, and Extreme Programming principles.`,
        icon: <FontAwesomeIcon icon={faBriefcase} />,
        iconColor: iconColor,
        iconBackgroundColor: iconBackground
    },
    {
        position: "left",
        contentBorderColor: companyBorderColor,
        contentBackgroundColor: contentBackground,
        date: "2014 - 2017",
        title: `Altran S.p.A.`,
        content: `Corso Sempione 66, Milan, Italy`,
        icon: <FontAwesomeIcon icon={faBriefcase} />,
        iconColor: iconColor,
        iconBackgroundColor: iconBackground
    },
    {
        position: "right",
        contentBorderColor: experienceBorderColor,
        contentBackgroundColor: contentBackground,
        date: "2014 - 2017",
        title: `Consultant`,
        content: `Technical Specialist and IT Consulting for Financial Services. During this 
        experience, I learned the basics of full-stack software development in 
        java, javascript, .NET through several projects in the Banking and 
        Insurance areas. Along with the technical activities, I was involved in the 
        analysis and backlog refinement of the products I worked on, learning 
        the principles of Agile and Scrum.`,
        icon: <FontAwesomeIcon icon={faBriefcase} />,
        iconColor: iconColor,
        iconBackgroundColor: iconBackground
    },
    {
        position: "left",
        contentBorderColor: companyBorderColor,
        contentBackgroundColor: contentBackground,
        date: "2014 - 2017",
        title: `Master's Degree in Physics`,
        content: `Università degli studi di Milano - Bicocca`,
        icon: <FontAwesomeIcon icon={faGraduationCap} />,
        iconColor: iconColor,
        iconBackgroundColor: iconBackground
    },
    {
        position: "right",
        contentBorderColor: experienceBorderColor,
        contentBackgroundColor: contentBackground,
        date: "2011 - 2014",
        title: `Master's Degree in Physics`,
        content: `Theoretical physics, computational calculus and Monte Carlo simulations, advanced statistics, computer molecular dynamics, study of stochastic processes, Markov chains, and statistical mechanics. Degree: 109/110.`,
        icon: <FontAwesomeIcon icon={faGraduationCap} />,
        iconColor: iconColor,
        iconBackgroundColor: iconBackground
    },
    {
        position: "right",
        contentBorderColor: experienceBorderColor,
        contentBackgroundColor: contentBackground,
        date: "2008 - 2011",
        title: `Bachelor's Degree in Physics`,
        content: `Programming (fortran, C++), analytical calculus, statistics, classical physics, relativity
        special, general relativity, quantum mechanics, interpolation algorithms. Degree: 107/110.`,
        icon: <FontAwesomeIcon icon={faGraduationCap} />,
        iconColor: iconColor,
        iconBackgroundColor: iconBackground
    },
]

export const projectEvents: EventProps[] = [
    {
        date: "2021 - Present",
        contentBorderColor: projectBorderColor,
        contentBackgroundColor: contentBackground,
        title: `Cloud Strategy`,
        content: <span>“Cloud strategy” is an internal cross-team between all cloud-related teams in Techedge. Its objective is to harmonize the company’s cloud 
        offering and architectures throughout all cloud providers (Google, AWS, Azure) and formalize the company’s best practices and guidelines to be 
        applied in every project.
        <ul>
            <li>Cloud providers partnerships</li>
            <li>Organization of academies for new hires</li>
            <li>Mentorship programs</li>
            <li>Learning and training (both internal and external) aiming to follow 
        people on their cloud certification path.</li>
            <li>Evangelization of DevOps practices.</li>
            <li>DesignOps.</li>
        </ul></span>,
        icon: <FontAwesomeIcon icon={faCode} />,
        iconColor: iconColor,
        iconBackgroundColor: iconBackground
    },
    {
        date: "2019 - present",
        contentBorderColor: projectBorderColor,
        contentBackgroundColor: contentBackground,
        title: `Eni E&P - journey to cloud and digital transformation`,
        content: `Along with my previous experience as a Technical Team Leader for Eni E&P (technical and scientific department, related to drilling digital processes), my team and I contributed to leading the customer through a digital transformation process and cloud adoption path. Via the implementation of more than ten new applications based on cloud-native approaches and best practices, we achieved cost reduction and strategic enhancement of our customer processes. The technological stack involved in the implementation of this process includes Microsoft Azure cloud-native services, a microservices approach based on Kubernetes, react.js, node.js, C#, and MongoDB.`,
        icon: <FontAwesomeIcon icon={faCode} />,
        iconColor: iconColor,
        iconBackgroundColor: iconBackground
    },
    {
        date: "2021 - Present",
        contentBorderColor: projectBorderColor,
        contentBackgroundColor: contentBackground,
        title: `Document Platform`,
        content: <span>Document Platform is the new document repository reference platform for the Exploration and Production department of a major Italian energy company. The objective of the new application is the creation of a brand-new document platform, based on MS Azure Cloud-native technologies, that can be grown over time to become a reference point for knowledge sharing for drilling, exploration, geosciences, and several others. It implements a complex permission model, several libraries, approval and review workflows, and an advanced full-text search functionality based on MS Azure Cognitive services.
        <ul>
            <li>600k documents</li>
            <li>25 TB of data stored on the cloud</li>
            <li>5 integrations with corporate systems</li>
        </ul>
        </span>,
        icon: <FontAwesomeIcon icon={faCode} />,
        iconColor: iconColor,
        iconBackgroundColor: iconBackground
    },
    {
        date: "2021 - 2022",
        contentBorderColor: projectBorderColor,
        contentBackgroundColor: contentBackground,
        title: `Luxottica Store360 Platform`,
        content: `Analysis and implementation for the solution architecture of a worldwide internet platform connecting more than 2.000 corporate and store users of the Luxottica group. The whole platform uses a micro frontend approach based on react.js and single-spa, and a microservices approach based on Kubernetes and node.js solutions. As a database, both relational (Microsoft SQL Server) and non-relational (MongoDb) paradigms are used.`,
        icon: <FontAwesomeIcon icon={faCode} />,
        iconColor: iconColor,
        iconBackgroundColor: iconBackground
    },
    {
        date: "2020",
        contentBorderColor: projectBorderColor,
        contentBackgroundColor: contentBackground,
        title: `Engineer Design & Development Reimbursement Simulation`,
        content: `Tool for Engineer Design & Development (ED&D) reimbursement simulation. The end-users of the ED&D Simulator use this instrument for what-if simulations and scenario analysis for payment plans of spare parts in the automotive sector. The application is developed with a microservice architecture with python, React.js, node.js, and MySQL.`,
        icon: <FontAwesomeIcon icon={faCode} />,
        iconColor: iconColor,
        iconBackgroundColor: iconBackground
    },
    {
        date: "2019 - 2020",
        contentBorderColor: projectBorderColor,
        contentBackgroundColor: contentBackground,
        title: `Eni E&P - Ecosystem of 24 Java and .NET applications`,
        content: `The enormous amount and complexity of data for the business domain of Exploration and Production demand a strong digital infrastructure. As project manager and solution architect, I lead a team dedicated to the evolution and maintenance of twenty-four applications with the sole purpose of dealing with all the phases of the E&P department, from mineral certification, concessions, well registration and dismission, production monitoring, and drilling simulations.`,
        icon: <FontAwesomeIcon icon={faCode} />,
        iconColor: iconColor,
        iconBackgroundColor: iconBackground
    },
    {
        date: "2017 - Present",
        contentBorderColor: projectBorderColor,
        contentBackgroundColor: contentBackground,
        title: "Riskturn",
        content: <span>Riskturn (<a href="www.riskturn.com">www.riskturn.com</a>) is a risk management software, dedicated to the probabilistic 
        forecast of future cash flows, a registered trademark internally 
        developed by Techedge. Riskturn counts a standard cloud version and 
        two enterprise customizations for three major companies. The software 
        has been applied in the Oil&Gas area (especially E&P) and in the 
        manufacturing area. The product is hosted through an Azure Cloud 
        Architecture and implemented with .NET, React, SQL Server and several 
        cloud-native services.
        <ul>
            <li>Product roadmap definition</li>
            <li>Cloud vendor Relationships (Microsoft), marketplace publishing</li>
            <li>Technical leadership and architectural design</li>
            <li>Monte Carlo simulations</li>
        </ul>
        </span>,
        icon: <FontAwesomeIcon icon={faCode} />,
        iconColor: iconColor,
        iconBackgroundColor: iconBackground
    },
    {
        date: "2017",
        contentBorderColor: projectBorderColor,
        contentBackgroundColor: contentBackground,
        title: `Online Banking - Deutsche Bank - Financial services`,
        content: `Online baking project management activities and coordination of 
        activities related to the application life cycle. Responsible for the annual 
        release plan, incident, problem and disaster Recovery, load, and 
        penetration tests, and management of public-facing internet 
        applications.`,
        icon: <FontAwesomeIcon icon={faCode} />,
        iconColor: iconColor,
        iconBackgroundColor: iconBackground
    },
    {
        date: "2014 - 2017",
        contentBorderColor: projectBorderColor,
        contentBackgroundColor: contentBackground,
        title: `BNP Paribas Securities Services - Financial Services`,
        content: `Application development in .NET framework and complete management 
        of project life cycle: requirements gathering, analysis, development, 
        testing, and release coordination.`,
        icon: <FontAwesomeIcon icon={faCode} />,
        iconColor: iconColor,
        iconBackgroundColor: iconBackground
    }
]
