import './database';

import { createHttpTerminator } from 'http-terminator';
import { getConnection } from 'typeorm';

import { logStartMsg, logStopMsg } from '../helper/log.helper';
import app from './app';

const port = parseInt(process.env.PORT as string) || 3000;

const server = app.listen(port, () => {
  logStartMsg();

  if (process.env.NODE_ENV === 'production') {
    process.on('SIGTERM', async () => {
      logStopMsg();

      const httpTerminator = createHttpTerminator({ server: server });
      const connection = getConnection();

      await httpTerminator.terminate();
      await connection.close();
    });
  }
});
