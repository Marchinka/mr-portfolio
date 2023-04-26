import React, { useEffect } from 'react';
import logo from './logo.svg';
// import './Reset.scss';
import './Variables.scss';
import './App.scss';
import 'animate.css';
import { Home } from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { DocumentDrive } from './Pages/DocumentDrive/DocumentDrive';
import { Resume } from './Pages/Resume/Resume';
import { Navbar } from './Components/Navbar/Navbar';
import { AppLayout } from './Components/AppLayout/AppLayout';
import { useNavigate } from "react-router-dom";
import { Timeline } from './Pages/Timeline/Timeline';
import { initializeAnalytics, trackEvent } from './Utils/Analytics';

initializeAnalytics();

function App() {

  const navigate = useNavigate();

  useEffect(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const source = urlParams.get('source');

      const itt = urlParams.get('itt');
      if (itt) {
        console.log("Itt found", itt);
        localStorage.setItem("itt", itt || "");
      }

      if (source) {
        console.log("Navigation catched to", source);
        navigate(source);
      }
  }, []);


  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const ittFromQuery = urlParams.get('itt');
    if (ittFromQuery) {
      console.log("Itt found", ittFromQuery);
      localStorage.setItem("itt", ittFromQuery || "");
    }

    let itt = localStorage.getItem("itt") || "unkown";
    trackEvent("itt", `itt:${itt}`);
  }, []);
  
  return (
    <AppLayout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/document-drive" element={<DocumentDrive />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <br />
      <br />
      <br />
    </AppLayout>
  );
}

export default App;
