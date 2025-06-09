import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('akic_user');
    if (storedUser) navigate('/dashboard');
  }, [navigate]);

  const handleLogin = async () => {
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .ilike('username', trimmedUsername)
      .maybeSingle();

    console.log("Supabase Lookup:", user, error);

    if (!user || error || user.password !== trimmedPassword) {
      alert('Invalid credentials. Please try again.');
    } else {
      localStorage.setItem('akic_user', JSON.stringify(user));
      navigate('/dashboard');
    }
  };

  return (
    <div className="select-none max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">Member Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full border px-4 py-2 rounded mb-4 text-black"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border px-4 py-2 rounded mb-4 text-black"
        required
      />
      <button
        onClick={handleLogin}
        className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
      >
        Access Dashboard
      </button>
    </div>
  );
};

export default Login;
