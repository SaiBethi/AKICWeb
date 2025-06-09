import React from 'react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    title: 'Investment Simulator',
    description: 'Simulate stock trades with real market data and virtual currency.',
    link: '/simulator',
    icon: '📈'
  },
  {
    title: 'AI Stock Assistant',
    description: 'Use AI to analyze trends and get investment suggestions.',
    link: '/ai',
    icon: '🤖'
  },
  {
    title: 'Market News Feed',
    description: 'Stay up to date with daily curated market news.',
    link: '/news',
    icon: '📰'
  },
  {
    title: 'Investing Course',
    description: 'Explore our club’s full curriculum to master investing.',
    link: '/course',
    icon: '📚'
  }
];

const DashboardCards = () => {
  const navigate = useNavigate();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {features.map((feature, idx) => (
        <div
          key={idx}
          onClick={() => navigate(feature.link)}
          className="cursor-pointer bg-white shadow hover:shadow-lg transition rounded-lg p-6 border border-gray-100 hover:border-purple-300"
        >
          <div className="text-3xl mb-3">{feature.icon}</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{feature.title}</h3>
          <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
