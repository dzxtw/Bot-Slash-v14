const fs = require('fs');
const chalk = require('chalk');

/**
 * @function
 * @param {Client} client - Instância do cliente do Discord.js
 */
module.exports = client => {
    fs.readdirSync('./Events/')
        .filter(file => file.endsWith('.js'))
        .forEach(event => {
            require(`../Events/${event}`);
        });
    console.log(chalk.greenBright('Eventos • Ok'));
};
