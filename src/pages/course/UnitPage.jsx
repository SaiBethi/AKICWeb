import React from 'react';
import { Link, useParams } from 'react-router-dom';

const unitLessons = {
  1: ['What is the stock market?', 'Major stock exchanges', 'Types of instruments'],
  2: ['Earnings & P/E ratios', 'Reading a balance sheet', 'Market cap & valuation'],
  3: ['Order types', 'Technical vs fundamental analysis', 'Intro to margin trading'],
  4: ['AI in trading', 'Crypto & DeFi', 'Robo-advisors & algos']
};

const UnitPage = () => {
  const { unitId } = useParams();
  const lessons = unitLessons[unitId] || [];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white/10 border border-white/10 rounded-2xl backdrop-blur shadow-lg space-y-6">
      <h2 className="text-3xl font-extrabold text-white select-none">
        📦 Unit {unitId} Lessons
      </h2>

      <ul className="select-none space-y-3">
        {lessons.map((l, idx) => (
          <li key={idx} className="flex items-center gap-3 text-white">
            <span className="inline-block w-2.5 h-2.5 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-full animate-pulse"></span>
            <Link
              to={`/course/unit/${unitId}/lesson/${idx + 1}`}
              className="hover:underline font-medium"
            >
              {idx + 1}. {l}
            </Link>
          </li>
        ))}
      </ul>

      <div className="pt-4">
        <Link
          to={`/course/unit/${unitId}/test`}
          className="inline-block bg-brandPurple text-white py-2 px-5 rounded-lg hover:bg-pink-500 transition"
        >
          🚀 Take Unit Test
        </Link>
      </div>
    </div>
  );
};

export default UnitPage;
