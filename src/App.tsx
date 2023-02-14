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

function App() {

  const navigate = useNavigate();

  useEffect(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const source = urlParams.get('source');
      if (source) {
        console.log("Navigation catched to", source);
        navigate(source);
      }
  }, []);
  
  return (
    <AppLayout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/document-drive" element={<DocumentDrive />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <br />
      <br />
      <br />
    </AppLayout>
  );
}

export default App;
