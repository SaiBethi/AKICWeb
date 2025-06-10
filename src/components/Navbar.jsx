import React from 'react';

const Navbar = () => {
  const user = localStorage.getItem('akic_user');
  const isLoggedIn = Boolean(user);

  const logout = () => {
    localStorage.removeItem('akic_user');
    window.location.href = '/';
  };

  return (
    <nav className="flex justify-between items-center p-4 border-b shadow-sm">
      <h1 className="text-lg font-semibold text-purple-700">Ardrey Kell Investing Club</h1>
      {isLoggedIn && (
        <button
          onClick={logout}
          className="text-sm text-gray-500 hover:text-red-500"
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
