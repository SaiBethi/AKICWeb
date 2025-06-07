import React from 'react';

const Dashboard = () => {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-3xl px-6 py-10 text-center">
        <h1 className="text-2xl font-bold mb-4">AKIC Member Portal</h1>
        <ul className="space-y-4 text-gray-700 text-left">
          <li>📈 Investment Simulator (Coming Soon)</li>
          <li>🧠 AI-Powered Stock Research</li>
          <li>📊 Market Dashboard</li>
          <li>📅 Member-Only Announcements</li>
          <li>💾 Submit Research or View Archives</li>
        </ul>
      </div>
    </section>
  );
};

export default Dashboard;
