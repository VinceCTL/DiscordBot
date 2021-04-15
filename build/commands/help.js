"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.help = void 0;
const tslib_1 = require("tslib");
const discord_1 = require("@typeit/discord");
let help = class help {
    async onHelp(command) {
        let getCommands = discord_1.Client.getCommands();
        let str = '';
        for (let command of getCommands) {
            str = str + '!' + command.commandName + ': ' + command.description + '\n';
        }
        await command.reply('Voici les commandes que j\'ai en stock Maggle: \n');
        return await command.channel.send(str);
    }
    notFound(message) {
        message.reply('Pas compris, tape "!help" pour avoir la liste des commandes dispo !');
    }
};
tslib_1.__decorate([
    discord_1.Command('help'),
    discord_1.Description('Te donnes toutes les infos sur les commandes dispo'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [discord_1.CommandMessage]),
    tslib_1.__metadata("design:returntype", Promise)
], help.prototype, "onHelp", null);
tslib_1.__decorate([
    discord_1.CommandNotFound(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [discord_1.CommandMessage]),
    tslib_1.__metadata("design:returntype", void 0)
], help.prototype, "notFound", null);
help = tslib_1.__decorate([
    discord_1.Discord('!')
], help);
exports.help = help;
//# sourceMappingURL=help.js.map