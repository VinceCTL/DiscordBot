import {ArgsOf, Client, Command, Description, Discord, On} from "@typeit/discord";
import {Message} from "discord.js";

@Discord()
export abstract class TestCommand {

    @On('message')
    @Description('Just Test')
    public async onMessage([message]: ArgsOf<"message">) {
        const events = Client.getEvent();
        // console.log('ouais ouasis', events);
    }
}
