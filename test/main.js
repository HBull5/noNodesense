const rl = require('readline').createInterface(process.stdin, process.stdout);
const input = require('./input.js');
const output = require('./output.js');

rl.setPrompt(`What is yo name?\n`);
rl.prompt();

input.input(rl).then(input => {
    output.output(input, rl);
})