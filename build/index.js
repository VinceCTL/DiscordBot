"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
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
const discord_1 = require("@typeit/discord");
async function start() {
    const client = new discord_1.Client({
        classes: [
            `${__dirname}/commands/*.{js, ts}`,
        ],
        silent: false,
        variablesChar: ":"
    });
    await client.login("ODA2Mjc1MzgyMTM5NTUxNzQ1.YBnEdg.50uEJzdAeAcjELomZFW1qOXcx0M");
}
start().then(() => console.log('al'));
//# sourceMappingURL=index.js.map