import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './pages/Layout';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';  // Capitalize the import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />  {/* Correct import */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
