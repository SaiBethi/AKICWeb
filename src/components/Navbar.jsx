import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('akic_logged_in');
    navigate('/login');
  };

  return (
    <header className="w-full h-16 bg-white shadow-md flex items-center justify-between px-6 sticky top-0 z-10">
      <h1 className="text-lg font-semibold text-purple-700 tracking-tight">Ardrey Kell Investing Club</h1>
      <button
        onClick={logout}
        className="text-sm text-gray-500 hover:text-red-500"
      >
        Logout
      </button>
    </header>
  );
};

export default Navbar;
