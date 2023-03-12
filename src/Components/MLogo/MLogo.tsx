import "./MLogo.scss";
import MLogoSvg from "./../../Images/MLogo.svg";

// export const MLogo = () => {
//     return <img src={MLogoSvg} style={{"width": "300px" }} alt="M" />

// }

export const MLogo = () => {
    return <svg width="307" height="202" viewBox="0 0 307 202" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
    <path d="M101.705 201V1H0.300904V46.24H61.9862V201H101.705Z" className="logo-fill"/>
    <path d="M0 1H0.300904M0.300904 1H101.705V201H61.9862V46.24H0.300904V1Z" className="logo-software" stroke-width="2"/>
    <path d="M203.411 201V1H102.006V46.24H163.692V201H203.411Z" className="logo-fill"/>
    <path d="M101.705 1H102.006M102.006 1H203.411V201H163.692V46.24H102.006V1Z" className="logo-agile" stroke-width="2"/>
    <path d="M305.116 201V1H203.712V46.24H265.397V201H305.116Z"  className="logo-fill"/>
    <path d="M203.411 1H203.712M203.712 1H305.116V201H265.397V46.24H203.712V1Z" className="logo-design"  stroke-width="2"/>
    </svg>
    
    
}