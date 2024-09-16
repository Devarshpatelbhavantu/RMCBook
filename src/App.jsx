import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ModuleDetail from './components/ModuleDetail/ModuleDetail';
import FormDetail from './components/FormDetail/FormDetail';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/module/:moduleName" element={<ModuleDetail />} />
      <Route path="/module/:moduleName/:formName" element={<FormDetail />} />
    </Routes>
  </Router>
  );
}

export default App;
