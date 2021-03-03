import chalk from 'chalk';
import { format } from 'date-fns';

export function logStartMsg(): void {
  const time = format(Date.now(), 'HH:mm:ss');
  const port = (process.env.PORT as string) || 3000;

  const msg =
    '[' +
    chalk.green('SERVER') +
    '] ' +
    chalk.gray.bold(time) +
    chalk.green(` Listening at port ${port}`);

  console.log(msg);
}

export function logStopMsg(): void {
  const time = format(Date.now(), 'HH:mm:ss');

  const closeMessage =
    '[' +
    chalk.green('SERVER') +
    '] ' +
    chalk.gray.bold(time) +
    chalk.green(` Closing the server`);

  console.log(closeMessage);
}

export function logDBConnection(): void {
  const time = format(Date.now(), 'HH:mm:ss');

  const startMessage =
    '[' +
    chalk.green('DATABASE') +
    '] ' +
    chalk.gray.bold(time) +
    chalk.green(` Connected to database`);

  console.log(startMessage);
}

export function logDBConnectionError(): void {
  const time = format(Date.now(), 'HH:mm:ss');

  const errorMessage =
    '[' +
    chalk.red('DATABASE') +
    '] ' +
    chalk.gray.bold(time) +
    chalk.red(` Database error`);

  console.log(errorMessage);
}
