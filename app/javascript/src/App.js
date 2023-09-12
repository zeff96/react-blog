import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Regsitration from './components/authentication/Registration';
import Authentication from './components/authentication/Authentication';

const App = () => {
  const token = localStorage.getItem('token');
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/registration' element={<Regsitration />} />
      </Routes>
    </Router>
  );
};

export default App;
