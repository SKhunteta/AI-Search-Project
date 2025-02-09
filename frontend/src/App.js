import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Recommendations from './components/Recommendations';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    try {
      const response = await fetch(`/api/search?query=${searchQuery}`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setResults([]);
    }
  };

  const handleSelectItem = async (itemId) => {
    setSelectedItemId(itemId);
    try {
      const response = await fetch(`/api/recommendations?productId=${itemId}`);
      const data = await response.json();
      setRecommendations(data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      setRecommendations([]);
    }
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>AI Agents</h1>
          <SearchBar onSearch={handleSearch} />
        </header>
        <Routes>
          <Route path="/search" element={<SearchResults results={results} onSelectItem={handleSelectItem} />} />
          <Route path="/recommendations/:productId" element={<Recommendations recommendations={recommendations} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;