import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUsers, FaProjectDiagram, FaUserPlus, FaEnvelope, FaHandshake, FaLock } from 'react-icons/fa';

const Sidebar = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Team', path: '/team', icon: <FaUsers /> },
    { name: 'Projects', path: '/projects', icon: <FaProjectDiagram /> },
    { name: 'Join', path: '/join', icon: <FaUserPlus /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
    { name: 'Partners', path: '/partners', icon: <FaHandshake /> },
    { name: 'Member Portal', path: '/dashboard', icon: <FaLock /> }
  ];

  return (
    <aside className="w-64 h-screen bg-[#121212] text-white shadow-xl fixed z-50 border-r border-gray-700">
      <div className="text-2xl font-bold p-6 tracking-wide bg-gradient-to-r from-brandPurple to-brandPink text-transparent bg-clip-text">
        AKIC
      </div>
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {navItems.map(({ name, path, icon }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive
                  ? 'bg-brandPink text-white shadow-neon'
                  : 'hover:bg-gray-800 text-gray-300'
              }`
            }
          >
            {icon}
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
