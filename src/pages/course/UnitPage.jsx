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
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">
        Unit {unitId}
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        {lessons.map((l, idx) => (
          <li key={idx}>
            <Link to={`/course/unit/${unitId}/lesson/${idx + 1}`} className="text-purple-600 hover:underline">
              {idx + 1}. {l}
            </Link>
          </li>
        ))}
      </ul>
      <Link to={`/course/unit/${unitId}/test`} className="mt-6 inline-block bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800">
        Take Unit Test
      </Link>
    </div>
  );
};

export default UnitPage;
