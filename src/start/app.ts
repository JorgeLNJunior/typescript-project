import 'dotenv/config';

import cors from 'cors';
import express, { Request, Response } from 'express';
import helmet from 'helmet';

import router from '../routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(router);

app.use((req: Request, res: Response) => {
  return res.status(404).json({ error: 'route not found' });
});

export default app;
