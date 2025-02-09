export const recommendationService = async () => {
  // Simulated async behavior with dummy recommendations
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        recommendations: [
          { id: 1, title: 'Popular Search 1', score: 0.95 },
          { id: 2, title: 'Trending Topic 1', score: 0.88 },
          { id: 3, title: 'Related Search 1', score: 0.75 }
        ]
      });
    }, 100);
  });
};