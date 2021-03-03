import { createConnection } from 'typeorm';

import { logDBConnection, logDBConnectionError } from '../helper/log.helper';

createConnection()
  .then(() => {
    logDBConnection();
  })
  .catch((error) => {
    logDBConnectionError();
    console.log(error);
  });
