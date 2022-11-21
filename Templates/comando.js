const { ApplicationCommandType } = require('discord.js');

module.exports = {
    name: '', //Nome do comando
    description: "", //Descrição do comando
    type: ApplicationCommandType.ChatInput,
    userPerms: [], //Permissões para poder usar. Deixando em branco qualquer um poderá usar
    //userPerms: ['SendMessages'],
    botPerms: [], //Permissões para o bot poder usar. Deixando em branco qualquer um poderá usar
    //botPerms: ['SendMessages'],
    ownerOnly: true, //false = qualquer um pode usar o comando. true = apenas o membro com o id salvo no .env poderá usar esse comando.
    run: async (client, interaction) => {
        //códgio aqui
    }
};
