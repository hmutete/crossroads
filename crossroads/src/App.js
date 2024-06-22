import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/AdminDash';
import OperatorDash from './components/OperatorDash';
import PastorDash from './components/PastorDash';
import UserDash from './components/UserDash';
import Login from './components/Login';
import './App.css'


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login"element={<Login setIsAuthenticated={setIsAuthenticated}  setIsAdmin={setIsAdmin}/> }/>
        <Route path="/operator" element={ isAuthenticated ? <OperatorDash /> : <Navigate to="/dashboard" />}  />
        <Route path="/pastor" element={ isAuthenticated ? <PastorDash /> : <Navigate to="/dashboard" />}  />
        <Route path="/dashboard" element={ isAuthenticated && isAdmin? <Dashboard /> : <Navigate to="/login" />}  />
        <Route path="/user" element={ isAuthenticated ? <UserDash /> : <Navigate to="/dashboard" />}  />
        <Route path="/" element={<Navigate from="/" to="/login" />}/>
      </Routes>
    </Router>
  );
};

export default App;