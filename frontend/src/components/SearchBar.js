import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const fetchSuggestions = async (searchQuery) => {
    try {
      const response = await axios.get(`/api/search?query=${searchQuery}`);
      setSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions([]);
    }
  };

  useEffect(() => {
    if (query.length > 2) {
      const debounceFetch = setTimeout(() => fetchSuggestions(query), 300);
      return () => clearTimeout(debounceFetch);
    }
  }, [query]);

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your search query..."
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion) => (
            <li key={suggestion.id} onClick={() => setQuery(suggestion.title)}>
              {suggestion.title}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SearchBar;