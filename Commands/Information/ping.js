const { ApplicationCommandType } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Exibe o ping da aplicação.',
    type: ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        interaction.reply({ content: `Ping: **${Math.round(client.ws.ping)} ms**` });
    },
};
