import {ArgsOf, Client, Command, Description, Discord} from "@typeit/discord";
import {CommandMessage} from "@typeit/discord";
import {Message} from "discord.js";

@Discord('!')
export abstract class BonjourCommand {

    @Command('Bonjour')
    @Description('Je dis bonjour')
    private async onMessage([message]: ArgsOf<"message">): Promise<Message> {
        return await message.reply(`Bonjour a toi mon con, ${message.author.username}`);
    }

}
