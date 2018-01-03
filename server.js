const chalk = require('chalk');

 /* chalk messages */
console.log(chalk.blue('Hello world!'));
console.log(chalk.blue('Hello') + 'World' + chalk.red('!'));
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.blue('Hello world!'));

console.log(
  `
  CPU: ${chalk.red('90%')}
  RAM: ${chalk.green('40%')}
  DISK: ${chalk.yellow('70%')}
  `
);

console.log(chalk.hex('#DEADED').bold('Bold gray!'));

const name = 'Sindre';
console.log(chalk.green('Hello %s'), name);

/* debug */
var debug = require('debug')('worker:a')
debug('listening');


require('./second-server.js');