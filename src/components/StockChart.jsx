import React, { useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const mockHistoricalData = (current, open, prevClose, count) => {
  const range = Math.abs(current - open) || 1;
  return Array.from({ length: count }, (_, i) => {
    const variance = Math.sin(i / 2) * range * 0.1;
    return parseFloat((prevClose + variance + Math.random() * range * 0.05).toFixed(2));
  });
};

const StockChart = ({ symbol }) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [interval, setInterval] = useState('1D');

  const handleLookup = async () => {
    setLoading(true);
    setError('');
    setChartData(null);

    try {
      const res = await axios.get('https://finnhub.io/api/v1/quote', {
        params: {
          symbol,
          token: import.meta.env.VITE_FINNHUB_API_KEY,
        },
      });

      const { c: current, o: open, pc: prevClose } = res.data;
      if (!current || !open || !prevClose) throw new Error('Missing data.');

      const points = interval === '1D' ? 12 : interval === '1M' ? 30 : 60;
      const labels = Array.from({ length: points }, (_, i) => `${i + 1}`);
      const data = mockHistoricalData(current, open, prevClose, points);

      setChartData({
        labels,
        datasets: [
          {
            label: `${symbol.toUpperCase()} Simulated Chart (${interval})`,
            data,
            borderColor: 'rgba(147, 51, 234, 1)',
            backgroundColor: 'rgba(147, 51, 234, 0.1)',
            tension: 0.3,
            fill: true,
          },
        ],
      });
    } catch (err) {
      console.error(err);
      setError("Failed to fetch data. Please ensure you're using a valid free API key.");
    }

    setLoading(false);
  };

  return (
    <div className="mt-10 bg-white/10 p-6 rounded-xl text-white select-none">
      <h3 className="text-xl font-bold mb-4">{symbol.toUpperCase()} Price Chart</h3>

      <div className="mb-4 flex gap-2 items-center">
        {['1D', '1M', '5M', '1Y'].map((intvl) => (
          <button
            key={intvl}
            onClick={() => setInterval(intvl)}
            className={`px-3 py-1 rounded ${interval === intvl ? 'bg-brandPurple text-white' : 'bg-gray-300 text-black'}`}
          >
            {intvl}
          </button>
        ))}
        <button
          onClick={handleLookup}
          className="ml-4 px-4 py-1 bg-brandPink hover:bg-pink-500 text-white rounded"
        >
          Lookup
        </button>
      </div>

      {loading ? (
        <p className="text-gray-300">Loading simulated chart...</p>
      ) : error ? (
        <p className="text-red-400">{error}</p>
      ) : chartData ? (
        <Line data={chartData} />
      ) : (
        <p className="text-gray-400">Click "Lookup" to simulate a chart.</p>
      )}
    </div>
  );
};

export default StockChart;
