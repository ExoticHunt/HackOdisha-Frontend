import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  Box, Container, CssBaseline} from "@mui/material";
import './App.css';
import Form from './Components/Form';
import NavComponent from './Components/Navbar';

function App() {
  return (
    <div>
      <NavComponent />
      <Form />
    </div>
  );
}

export default App;
