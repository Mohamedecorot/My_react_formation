import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;
