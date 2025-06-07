import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Join from './pages/Join';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import MainLayout from './layouts/MainLayout';

const isAuthenticated = () => {
  return localStorage.getItem('akic_logged_in') === 'true';
};

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <MainLayout>
            <Login />
          </MainLayout>
        }
      />

      <Route
        path="/dashboard"
        element={
          isAuthenticated() ? (
            <MainLayout>
              <Dashboard />
            </MainLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* All public routes in layout */}
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      <Route path="/team" element={<MainLayout><Team /></MainLayout>} />
      <Route path="/projects" element={<MainLayout><Projects /></MainLayout>} />
      <Route path="/join" element={<MainLayout><Join /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      <Route path="/partners" element={<MainLayout><Partners /></MainLayout>} />
    </Routes>
  );
}


export default App;
