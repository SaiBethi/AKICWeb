import React from 'react';
import { Link } from 'react-router-dom';

const units = [
  { id: 1, title: 'Introduction to Financial Markets' },
  { id: 2, title: 'Stock Fundamentals & Valuation' },
  { id: 3, title: 'Trading Basics & Strategies' },
  { id: 4, title: 'Fintech & Modern Investing' }
];

const CourseHome = () => (
  <section className="space-y-8 px-4 max-w-4xl mx-auto">
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-extrabold text-white select-none drop-shadow-md">
        📚 Course Overview
      </h1>
      <Link
        to="/dashboard"
        className="bg-brandPurple hover:bg-pink-500 text-white py-2 px-4 rounded-lg transition"
      >
        ← Member Dashboard
      </Link>
    </div>

    <div className="space-y-4">
      {units.map((u) => (
        <div
          key={u.id}
          className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-neon transition-all hover:scale-[1.02]"
        >
          <Link
            to={`/course/unit/${u.id}`}
            className="text-2xl font-bold text-brandPurple hover:underline select-none block"
          >
            Unit {u.id}: {u.title}
          </Link>
        </div>
      ))}

      {/* Final Exam card at the end */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-neon transition-all hover:scale-[1.02]">
        <Link
          to="/course/final-exam"
          className="text-2xl font-bold text-pink-500 hover:underline select-none block"
        >
          🎓 Final Exam
        </Link>
      </div>
    </div>
  </section>
);

export default CourseHome;
