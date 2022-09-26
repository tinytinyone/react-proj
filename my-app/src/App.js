import './App.css';
import React from 'react';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/Messages" element={<Dialogs />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
