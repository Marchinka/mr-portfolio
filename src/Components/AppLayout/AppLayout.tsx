import { Route, Routes } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import "./AppLayout.scss";

export const AppLayout = (props: { children: React.ReactNode }) => {
    return <div className="app-layout">
                    <Navbar />
                    <div className="w3-container">
                        <div className="w3-content">
                            {props.children}
                        </div>
                    </div>
                </div>
}