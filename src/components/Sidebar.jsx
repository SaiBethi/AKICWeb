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
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col fixed">
      <div className="text-2xl font-bold p-6 border-b border-gray-700 tracking-wide">
        <span className="text-purple-400">AKIC</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1 p-4 text-sm">
          {navItems.map(({ name, path, icon }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-800 transition ${
                    isActive ? 'bg-purple-700 text-white' : 'text-gray-300'
                  }`
                }
              >
                {icon}
                <span>{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
