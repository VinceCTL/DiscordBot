// import express from 'express';
//
// const app = express();
// const port = 3000;
// app.get('/', (req, res) => {
//     res.send('The sedulous hyena ate the antelope!');
// });
// // @ts-ignore
// app.listen(port, err => {
//     if (err) {
//         return console.error(err);
//     }
//     return console.log(`server is listening on ${port}`);
// });

// import { Client } from "@typeit/discord/Client";
// import "reflect-metadata";
import {TestCommand} from "./commands/test";
import {BonjourCommand} from "./commands/bonjour";
import {CommandMessage} from "@typeit/discord";


// async function start() {
//     const Token = 'ODA2Mjc1MzgyMTM5NTUxNzQ1.YBnEdg.p5oj_81WuJ-hK_XIeqlSaMWsPmc'
//     const myCommands: Function[] = [];
//     const client = new Client({
//
//         silent: false,
//     });
//     await client.login(Token, TestCommand, BonjourCommand);
// }
//
// start().then( () => console.log('lol'));


import { Client } from "@typeit/discord";
import {ClientOptions} from "discord.js";

async function start() {
    const client = new Client({
        classes: [
            `${__dirname}/commands/*.{js, ts}`, // glob string to load the classes
        ],
        silent: false,
        variablesChar: ":"
    });

    await client.login("ODA2Mjc1MzgyMTM5NTUxNzQ1.YBnEdg.50uEJzdAeAcjELomZFW1qOXcx0M");
}

start().then(() => console.log('al'));
