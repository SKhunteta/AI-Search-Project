import React from 'react';

function SearchResults({ results, onSelectItem }) {
  if (!results || results.length === 0) {
    return <div className="search-results">No results found</div>;
  }
  return (
    <div className="search-results">
      {results.map((result) => (
        <div key={result.id} className="result-item" onClick={() => onSelectItem(result.id)}>
          <h3>{result.title}</h3>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;