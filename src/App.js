import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path= "/" element = {<Landing />} />
          <Route path= "/home" element = {<Home />} />
          <Route path= "/login" element = {<Login />} />
          <Route path= "/register" element = {<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
