import 'reflect-metadata';

import cors from 'cors';
import { config } from 'dotenv';
import express, { Request, Response } from 'express';
import hateLimit from 'express-rate-limit';
import helmet from 'helmet';
import path from 'path';
import { resolve } from 'path';
import swaggerUi from 'swagger-ui-express';
import YML from 'yamljs';

import { errorHandler } from '../app/middleware/error.handler';
import { httpLogger } from '../config/logger';
import router from '../routes';

const NODE_ENV = process.env.NODE_ENV;

config({ path: NODE_ENV === 'test' ? '.env.test' : '.env' });

const swaggerDevPath = resolve('src/config/swagger.yml');
const swaggerProdPath = resolve('dist/config/swagger.yml');
const swaggerDoc = YML.load(
  NODE_ENV === 'production' ? swaggerProdPath : swaggerDevPath,
);

const app = express();

if (NODE_ENV !== 'test') {
  app.use(hateLimit({ max: 30 }));
}
app.use(express.json());
app.use(express.static(path.resolve('public')));
app.use(cors());
app.use(helmet());
app.use(httpLogger);
app.use(router);
app.use(errorHandler);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use((req: Request, res: Response) => {
  return res.status(404).json({
    status: 404,
    error: 'route not found',
  });
});

export default app;
