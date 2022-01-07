// Role menu stuff
const { Command } = require('./commands.js')
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')

// Pronoun Menu
const PnounButtons = new Discord.MessageActionRow({
    components: [
        new MessageButton()
            .setStyle("PRIMARY")
            .setCustomId('hehim')
            .setLabel("He/Him"),
        new MessageButton()
            .setStyle("PRIMARY")
            .setCustomId('sheher')
            .setLabel("She/Her"),
        new MessageButton()
            .setStyle("PRIMARY")
            .setCustomId('theythem')
            .setLabel("They/Them"),
        new MessageButton()
            .setStyle("PRIMARY")
            .setCustomId('neopnoun')
            .setLabel("Neopronouns"),
    ]
});

Commands.pronouns = new Command("Creates a pronoun menu in the current channel", (message, args) => {
    message.channel.send({
        embeds: [
            new Discord.MessageEmbed()
                .setColor("#0368f8")
                .setTitle("Pronoun Roles")
                .setDescription("This server has pronoun roles! Click the buttons to toggle the roles.")
        ],
        components: [PnounButtons]
    })
}, "Roles")

// Color Menu
const ColourButtons = new Discord.MessageActionRow({
    components: [
        new Discord.MessageSelectMenu()
				.setCustomId('select')
				.setPlaceholder('Nothing selected')
				.addOptions([
					{
						label: 'Red',
						description: 'This is a description',
						value: 'red',
					},
                    {
						label: 'Purple',
						description: 'This is a description',
						value: 'purple',
					},
                    {
						label: 'Green',
						description: 'This is a description',
						value: 'green',
					},
                    {
						label: 'Pink',
						description: 'This is a description',
						value: 'pink',
					},
                    {
						label: 'Orange',
						description: 'This is a description',
						value: 'orange',
					},
                    {
						label: 'Yellow',
						description: 'This is a description',
						value: 'yellow',
					},
                    {
						label: 'Blue',
						description: 'This is a description',
						value: 'blue',
					},
				]),
    ]
});

Commands.colours = new Command("Creates a colours menu in the current channel", (message, args) => {
    message.channel.send({
        embeds: [
            new Discord.MessageEmbed()
                .setColor("#0368f8")
                .setTitle("Colour Roles")
                .setDescription("This server has color roles! Select your color from the drop down.")
        ],
        components: [ColourButtons]
    })
}, "Roles")