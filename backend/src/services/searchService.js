export const searchService = async (query) => {
  // Simulated async behavior with dummy results
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        results: [
          { id: 1, title: `Result 1 for "${query}"`, description: 'This is a dummy search result' },
          { id: 2, title: `Result 2 for "${query}"`, description: 'Another dummy search result' },
          { id: 3, title: `Result 3 for "${query}"`, description: 'Yet another dummy search result' }
        ],
        total: 3
      });
    }, 100);
  });
};