import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const CourseLayout = () => (
  <div className="max-w-3xl mx-auto p-6 space-y-6">
    <header className="text-center">
      <h1 className="text-3xl font-bold text-purple-700">AKIC Investing Course</h1>
      <p className="text-gray-600 select-none">Learn at your own pace. Start by picking a unit.</p>
      <nav className="mt-4 space-x-4">
        <Link to="/course" className="text-purple-600 hover:underline">Course Home</Link>
      </nav>
    </header>
    <main><Outlet /></main>
  </div>
);

export default CourseLayout;
