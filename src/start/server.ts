import chalk from 'chalk';
import { format } from 'date-fns';

import app from './app';

const port = parseInt(process.env.PORT as string) || 3000;

app.listen(port, () => {
  const fullHour = format(Date.now(), 'HH:mm:ss');

  const startMessage =
    '[' +
    chalk.green('SERVER') +
    '] ' +
    chalk.gray.bold(fullHour) +
    chalk.green(` Listening at port ${port}`);

  console.log(startMessage);
});
