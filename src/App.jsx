import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Join from './pages/Join';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RequireAuth from './utils/RequireAuth';
import Simulator from './pages/Simulator';
import AI from './pages/AI';
import News from './pages/News';
import CourseLayout from './components/CourseLayout';
import CourseHome from './pages/course/CourseHome';
import UnitPage from './pages/course/UnitPage';
import LessonPage from './pages/course/LessonPage';
import UnitTest from './pages/course/UnitTest';
import FinalExam from './pages/course/FinalExam';

import MainLayout from './layouts/MainLayout';

const isAuthenticated = () => {
  return localStorage.getItem('akic_logged_in') === 'true';
};

function App() {
  return (
    <Routes>
      {/* Protected Route */}
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/simulator"
        element={
          <RequireAuth>
            <MainLayout><Simulator /></MainLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/ai"
        element={
          <RequireAuth>
            <MainLayout><AI /></MainLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/news"
        element={
          <RequireAuth>
            <MainLayout><News /></MainLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/course"
        element={
          <RequireAuth>
            <MainLayout>
              <CourseLayout />
            </MainLayout>
          </RequireAuth>
        }
      >
        <Route index element={<CourseHome />} />
        <Route path="unit/:unitId" element={<UnitPage />} />
        <Route path="unit/:unitId/lesson/:lessonId" element={<LessonPage />} />
        <Route path="unit/:unitId/test" element={<UnitTest />} />
        <Route path="final-exam" element={<FinalExam />} />
      </Route>

      {/* Public Routes */}
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/team" element={<MainLayout><Team /></MainLayout>} />
      <Route path="/projects" element={<MainLayout><Projects /></MainLayout>} />
      <Route path="/join" element={<MainLayout><Join /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      <Route path="/partners" element={<MainLayout><Partners /></MainLayout>} />
      <Route
        path="/login"
        element={
          <MainLayout>
            <Login />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
