import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="relative min-h-screen overflow-hidden font-sans text-white">
      <div className="fixed inset-0 -z-10 animate-gradientShift bg-[length:600%_600%] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"></div>

      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div
          className="floating-orb"
          style={{
            width: '300px',
            height: '300px',
            backgroundColor: '#6366f1', // indigo-500
            top: '10%',
            left: '15%',
            animationDelay: '0s',
          }}
        />
        <div
          className="floating-orb"
          style={{
            width: '400px',
            height: '400px',
            backgroundColor: '#8b5cf6', // violet-500
            bottom: '10%',
            right: '10%',
            animationDelay: '4s',
          }}
        />
        <div
          className="floating-orb"
          style={{
            width: '200px',
            height: '200px',
            backgroundColor: '#0ea5e9', // sky-500
            top: '40%',
            right: '25%',
            animationDelay: '8s',
          }}
        />
      </div>

      <div className="flex min-h-screen">
        <div className="w-64 fixed h-full z-20">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-grow ml-64 relative z-10">
          {!isLoginPage && <Navbar />}
          <main className="flex-grow w-full px-6 py-12 flex justify-center animate-fadeIn">
            <div className="w-full max-w-5xl">
              {children || <Outlet />}
            </div>
          </main>
          {!isLoginPage && <Footer />}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
