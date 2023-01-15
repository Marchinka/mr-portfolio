import React from 'react';
import logo from './logo.svg';
import './Reset.scss';
import './Variables.scss';
import './App.scss';
import { Home } from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { DocumentDrive } from './Pages/DocumentDrive/DocumentDrive';
import { Resume } from './Pages/Resume/Resume';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/document-drive" element={<DocumentDrive />} />
      </Routes>
    </div>
  );
}

export default App;
