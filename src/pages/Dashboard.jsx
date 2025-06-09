import React from 'react';
import DashboardCards from '../components/DashboardCards';

const Dashboard = () => {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
          AKIC Member Dashboard
        </h1>
        <DashboardCards />
      </div>
    </section>
  );
};

export default Dashboard;