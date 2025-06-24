import React, { useState } from 'react';
import axios from 'axios';
import NameCard from './components/NameCard';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/get-name-data', { name });
    setResults(res.data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">🌍 Name Explorer</h1>
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <input
            type="text"
            className="flex-1 border p-2 rounded"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Explore
          </button>
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {results.map((entry, idx) => (
            <NameCard key={idx} data={entry} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
