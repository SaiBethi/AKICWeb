import React, { useEffect, useState } from 'react';
import DashboardCards from '../components/DashboardCards';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('akic_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUserData(parsedUser);
      } catch (err) {
        console.error('Failed to parse stored user:', err);
      }
    }
  }, []);

  return (
    <section className="flex justify-center">
      <div className="w-full max-w-5xl px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">
          {userData ? `Hello, ${userData.name}!` : 'Welcome back!'}
        </h1>
        {userData?.role && (
          <p className="text-brandPurple text-lg mb-6">{userData.role}</p>
        )}
        <DashboardCards />
      </div>
    </section>
  );
};

export default Dashboard;
