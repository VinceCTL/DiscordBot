import {Client, Command, CommandMessage, CommandNotFound, Description, Discord} from "@typeit/discord";
import {Message} from "discord.js";


@Discord('!')
export abstract class help {

    @Command('help')
    @Description('Te donnes toutes les infos sur les commandes dispo')
    private async onHelp(command: CommandMessage): Promise<Message> {

        let getCommands = Client.getCommands();
        let str: string = '';

        for (let command of getCommands) {
            str = str + '!' + command.commandName + ': ' + command.description + '\n';
        }
        await command.reply('Voici les commandes que j\'ai en stock Maggle: \n')
        return await command.channel.send(str);
    }

    @CommandNotFound()
    private notFound(message: CommandMessage) {
        message.reply('Pas compris, tape "!help" pour avoir la liste des commandes dispo !');
    }
}
