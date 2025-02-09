import { searchService } from '../services/searchService.js';

export const search = async (req, res) => {
  const { query } = req.query;
  try {
    const results = await searchService(query);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Search failed' });
  }
};