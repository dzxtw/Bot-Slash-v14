const client = require('..');
const chalk = require('chalk');
const ms = require('ms')

client.on("ready", () => {


	const { user, ws } = client;
	setInterval(() => {
		const ping = ws.ping;
		user.setActivity({ name: `Ping: ${ping} ms`, type: 3, })
	}, ms("5s"))

	console.log(chalk.red(`${client.user.username} online!`))
});