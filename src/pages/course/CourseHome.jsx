import React from 'react';
import { Link } from 'react-router-dom';

const units = [
  { id: 1, title: 'Introduction to Financial Markets' },
  { id: 2, title: 'Stock Fundamentals & Valuation' },
  { id: 3, title: 'Trading Basics & Strategies' },
  { id: 4, title: 'Fintech & Modern Investing' }
];

const CourseHome = () => (
  <section className="space-y-4">
    {units.map((u) => (
      <div key={u.id} className="bg-white rounded shadow p-4 hover:shadow-lg">
        <Link to={`/course/unit/${u.id}`} className="text-xl font-semibold text-purple-700">
          {u.id}. {u.title}
        </Link>
      </div>
    ))}
  </section>
);

export default CourseHome;
