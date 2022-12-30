import React from "react";
import './App.css';

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import Home from "./pages";
import Team from "./pages/team";


function App() {

  return (
    <Router>
       <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/team" element={<Team />} exact />
       </Routes>
    </Router>
  );
}

export default App;
