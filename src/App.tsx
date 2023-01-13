import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Home } from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { DocumentDrive } from './Pages/DocumentDrive/DocumentDrive';

function App() {
  return (
    <div className="App">
      Ciao
      <Routes>
        <Route index element={<Home />} />
        <Route path="/document-drive" element={<DocumentDrive />} />
      </Routes>
    </div>
  );
}

export default App;
