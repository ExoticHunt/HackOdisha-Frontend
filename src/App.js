import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavComponent from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

function App() {
  return (
    <div>
      <Router>
      <NavComponent />
      <div className='main-container'>
      
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
      
      </div>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
