"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plaYoutube = void 0;
const tslib_1 = require("tslib");
const discord_1 = require("@typeit/discord");
const ytdl = require('ytdl-core');
let plaYoutube = class plaYoutube {
    constructor() {
        this.playlist = [];
        this.isPlay = false;
    }
    async PlaYoutube(message) {
        let args = message.content.split(' ');
        if (message.member.voice.channel) {
            console.log('ok');
            if (!args[1] || !args[1].startsWith('https://www.youtube.com/watch?v')) {
                this.isPlay = false;
                return message.reply('sans liens je peux pas jouer grand choses mon grand..');
            }
            else {
                if (this.playlist.length > 0) {
                    this.playlist.push(args[1]);
                    message.reply('vidéo ajouté a la playList');
                }
                else {
                    this.playlist.push(args[1]);
                    message.reply('video ajouté a la playlist');
                    message.member.voice.channel.join().then((connection) => {
                        this.playMusic(connection);
                        this.isPlay = true;
                        connection.on('disconnect', () => {
                            this.playlist = [];
                        });
                    }).catch(error => {
                        console.log(error());
                    });
                }
            }
        }
        else {
            console.log('!channel');
            return message.reply('Il faut être dans un salon pour que je lance la musique !');
        }
    }
    async playMusic(connection) {
        let dispatcher = connection.play(ytdl(this.playlist[0]));
        dispatcher.on("finish", () => {
            this.playlist.shift();
            dispatcher.destroy();
            if (this.playlist.length > 0) {
                this.playMusic(connection);
            }
            else {
                connection.disconnect();
            }
        });
        dispatcher.on("error", err => {
            console.log('erreur de dispatch ', err);
            dispatcher.destroy();
            connection.disconnect();
            // return essage.channel.send('erreur dans le bail, relance la commmande');
        });
    }
    async displayPlaylist(message) {
        let str = '';
        console.log('alooooooo');
        for (let i = 0; i < this.playlist.length; i = i + 1) {
            console.log('wesh', this.playlist[i]);
            await ytdl.getInfo(this.playlist[i], (err, info) => {
                console.log('son per');
                if (err) {
                    console.log('erreur', err);
                    this.playlist.splice(i, 1);
                }
                else {
                    str += info.title + '\n';
                    console.log('alo', str);
                }
                message.reply(str);
            });
            console.log('we?');
            return message.reply('ok');
        }
    }
};
tslib_1.__decorate([
    discord_1.Command('play'),
    discord_1.Description('Jouer un son de youtube dans une conversation, entre dans un salon et tape "!play *lien youtube*"'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [discord_1.CommandMessage]),
    tslib_1.__metadata("design:returntype", Promise)
], plaYoutube.prototype, "PlaYoutube", null);
tslib_1.__decorate([
    discord_1.Command('playlist'),
    discord_1.Description('Affiche la playlist Courante'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [discord_1.CommandMessage]),
    tslib_1.__metadata("design:returntype", Promise)
], plaYoutube.prototype, "displayPlaylist", null);
plaYoutube = tslib_1.__decorate([
    discord_1.Discord('!')
], plaYoutube);
exports.plaYoutube = plaYoutube;
//# sourceMappingURL=plaYoutube.js.map