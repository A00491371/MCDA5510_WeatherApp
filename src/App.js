import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import MyTown from './components/MyTown';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="navbar">
         <div className="navbar-left">
        <img src="/favicon.ico" alt="Weather Icon" className="navbar-icon" />
        <h1 className="app-title">Weather App</h1>
      </div>
          <nav className="navbar-links">
            <NavLink to="/about" className="nav-link">About Me</NavLink>
            <NavLink to="/myTown" className="nav-link">My Town</NavLink>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/myTown" element={<MyTown />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
