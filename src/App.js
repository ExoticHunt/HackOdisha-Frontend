import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './Components/Form';
import Header from './Components/Navbar';

function App() {
  return (
    <div className='App'>
      <Header />
      <Form />
    </div>
  );
}

export default App;
