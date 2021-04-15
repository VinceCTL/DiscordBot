"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BonjourCommand = void 0;
const tslib_1 = require("tslib");
const discord_1 = require("@typeit/discord");
let BonjourCommand = class BonjourCommand {
    async onMessage([message]) {
        return await message.reply(`Bonjour a toi mon con, ${message.author.username}`);
    }
};
tslib_1.__decorate([
    discord_1.Command('Bonjour'),
    discord_1.Description('Je dis bonjour'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BonjourCommand.prototype, "onMessage", null);
BonjourCommand = tslib_1.__decorate([
    discord_1.Discord('!')
], BonjourCommand);
exports.BonjourCommand = BonjourCommand;
//# sourceMappingURL=bonjour.js.map