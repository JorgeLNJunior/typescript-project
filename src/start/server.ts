import chalk from 'chalk';

import app from './app';

const port = parseInt(process.env.PORT as string) || 3000;

const hours = new Date().getHours();
const minutes = new Date().getMinutes();
const seconds = new Date().getSeconds();
const fullHour = `${hours}:${minutes}:${seconds}`;

const startMessage =
  '[' +
  chalk.green('SERVER') +
  '] ' +
  chalk.gray.bold(fullHour) +
  chalk.green(` Listening at port ${port}`);

app.listen(port, () => {
  console.log(startMessage);
});
