import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="flex min-h-screen">
      {/* Sidebar always visible */}
      <div className="w-64 fixed h-full bg-gray-900 text-white z-50">
        <Sidebar />
      </div>

      {/* Content area shifted right by 64 (sidebar width) */}
      <div className="flex flex-col flex-grow ml-64 bg-white min-h-screen">
        {/* Navbar (hidden on login) */}
        {!isLoginPage && <Navbar />}

        <main className="flex-grow w-full px-6 py-12 flex justify-center">
          <div className="w-full max-w-4xl">
            {children || <Outlet />}
          </div>
        </main>

        {/* Footer (hidden on login) */}
        {!isLoginPage && <Footer />}
      </div>
    </div>
  );
};

export default MainLayout;
