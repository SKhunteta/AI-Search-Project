import express from 'express';
import cors from 'cors';
import searchRoutes from './routes/search.js';
import recommendationRoutes from './routes/recommendations.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api', searchRoutes);
app.use('/api', recommendationRoutes);

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});