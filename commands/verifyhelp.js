const Discord = require('discord.js');

const settings = require('../settings.js');

module.exports = {
    name: 'verifyhelp',
    description: 'Get UW identity verification help',
    args: false,
    guildOnly: true,
    displayHelp: true,
    execute(message, args) {
        const guildSettings = settings.get(message.guild?.id);
        const verifyHelpEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Verification Help')
            .addFields(
                { name: `${guildSettings.prefix}verify [UWaterloo Email]`, value: `Verify your Waterloo identity for server access.\nExample usage: \`${guildSettings.prefix}verify bob@uwaterloo.ca\``},
                { name: `${guildSettings.prefix}confirm [TOKEN]`, value: `Confirm your Waterloo identity, using the token sent via email.\nExample usage: \`${guildSettings.prefix}confirm 123456\`` },
                { name: `${guildSettings.prefix}unverify`, value: `Unlink your UW identity and delete all of your user data. This will remove any verified roles that you have.` }
            );
        message.channel.send(verifyHelpEmbed);
    }
}