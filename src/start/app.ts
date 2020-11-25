import 'dotenv/config';

import cors from 'cors';
import express, { Request, Response } from 'express';
import hateLimit from 'express-rate-limit';
import helmet from 'helmet';

import router from '../routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(hateLimit({ max: process.env.NODE_ENV === 'test' ? 200 : 5 }));
app.use(router);

app.use((req: Request, res: Response) => {
  return res.status(404).json({ error: 'route not found' });
});

export default app;
