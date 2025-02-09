import { recommendationService } from '../services/recommendationService.js';

export const getRecommendations = async (req, res) => {
  try {
    const recommendations = await recommendationService();
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get recommendations' });
  }
};