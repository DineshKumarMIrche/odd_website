import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import Login from "./components/Login";
import "./App.css"



function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        {loggedIn ? (
          <Route path="/dashboard" element={<Dashboard />} />
        ) : (
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        )}
        <Route path="/register" element={<Registration />} />
      </Routes>
      <Footer />
    </Router>

  );
}


export default App;


