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
import { AppLayout } from './Components/AppLayout/AppLayout';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/document-drive" element={<DocumentDrive />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
