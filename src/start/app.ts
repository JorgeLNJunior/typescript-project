import 'dotenv/config';

import cors from 'cors';
import express, { Request, Response } from 'express';
import hateLimit from 'express-rate-limit';
import helmet from 'helmet';
import path from 'path';
import { resolve } from 'path';
import swaggerUi from 'swagger-ui-express';
import YML from 'yamljs';

import { logger } from '../config/logger';
import router from '../routes';

const swaggerDoc = YML.load(resolve('src/config/swagger.yml'));

const app = express();

app.use(express.json());
app.use(express.static(path.resolve('public')));
app.use(cors());
app.use(helmet());
app.use(logger);
app.use(hateLimit({ max: process.env.NODE_ENV === 'test' ? 200 : 30 }));
app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use((req: Request, res: Response) => {
  return res.status(404).json({ error: 'route not found' });
});

export default app;
