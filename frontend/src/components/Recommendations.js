import React from 'react';

function Recommendations({ recommendations }) {
  if (!recommendations || recommendations.length === 0) {
    return <div className="recommendations">No recommendations found</div>;
  }
  return (
    <div className="recommendations">
      {recommendations.map((recommendation) => (
        <div key={recommendation.id} className="recommendation-item">
          <h3>{recommendation.title}</h3>
          <p>{recommendation.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Recommendations;
