import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavComponent from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

function App() {
  return (
    <div>
      <NavComponent />
      <div>
      <Router>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
      </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
