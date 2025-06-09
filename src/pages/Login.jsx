import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const Sleep = async () => {
  await sleep(50);
}

const Login = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('akic_logged_in') === 'true') {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleLogin = async () => {
    if (code.trim() === 'akic2025') {
      localStorage.setItem('akic_logged_in', 'true');
      await new Promise((resolve) => setTimeout(resolve, 100)); // <-- Add this delay
      navigate('/dashboard');
    } else {
      alert('Invalid access code.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">
        Join the Ardrey Kell Investing Club
      </h1>
      <input
        type="password"
        placeholder="Enter club access code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full border px-4 py-2 rounded mb-4 text-black"
      />
      <button
        onClick={handleLogin}
        className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
      >
        Access Portal
      </button>
    </div>
  );
};

export default Login;
