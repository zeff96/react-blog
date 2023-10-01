import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Regsitration from './components/authentication/Registration';
import Authentication from './components/authentication/Authentication';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Homepage />} />
          <Route exact path='/registration' element={<Regsitration />} />
          <Route exact path='/login' element={<Authentication />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
