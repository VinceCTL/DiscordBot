"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestCommand = void 0;
const tslib_1 = require("tslib");
const discord_1 = require("@typeit/discord");
let TestCommand = class TestCommand {
    async onMessage([message]) {
        const events = discord_1.Client.getEvent();
        // console.log('ouais ouasis', events);
    }
};
tslib_1.__decorate([
    discord_1.On('message'),
    discord_1.Description('Just Test'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TestCommand.prototype, "onMessage", null);
TestCommand = tslib_1.__decorate([
    discord_1.Discord()
], TestCommand);
exports.TestCommand = TestCommand;
//# sourceMappingURL=test.js.map