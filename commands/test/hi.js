const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'hi',
    category : 'test',
    description : 'hello',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging...`)
        const embed = new MessageEmbed()
            .setTitle('Pong!')
            .setColor("RANDOM")
            .setDescription('hello')
            await message.channel.send(embed)
            msg.delete()

    }
}
