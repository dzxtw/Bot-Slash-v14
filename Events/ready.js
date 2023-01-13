const client = require('..');
const chalk = require('chalk');
const ms = require('ms');

/**
 * @event 'ready'
 * Este evento é acionado quando o cliente está pronto
 *
 * Ele define um intervalo para atualizar a atividade do bot para exibir o ping atual em milissegundos a cada 5 segundos.
 * Ele também registra uma mensagem no console para indicar que o bot está online.
 */
client.on('ready', () => {
    const { user, ws } = client;
    /**
     * @function setInterval
     * Ele define um intervalo para atualizar a atividade do bot para exibir o ping atual em milissegundos a cada 5 segundos.
     *
     * @param {function} função a ser executada a cada 5 segundos
     * @param {number} 5s - tempo em milissegundos para o intervalo
     *
     * @returns {number} um timerId
     *
     */
    setInterval(() => {
        const ping = ws.ping;
        user.setActivity({ name: `Ping: ${ping} ms`, type: 3 });
    }, ms('5s'));

    /**
     * @function console.log
     * Registra uma mensagem no console para indicar que o bot está online.
     *
     * @param {string} `${client.user.username} online!` - mensagem a ser registrada no console
     */
    console.log(chalk.red(`${client.user.username} online!`));
});
