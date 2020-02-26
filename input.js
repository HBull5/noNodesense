const rl = require('readline').createInterface(process.stdin, process.stdout);

let num1 = Math.floor((Math.random() * 11) + 1);
let num2 = Math.floor((Math.random() * 11) + 1);
let answer = num1 + num2;

rl.setPrompt(`What is the sum of ${num1} + ${num2}?\n`);
rl.prompt();
/**
 * Since readline inherits from the evenemitter class 
 * that is why we can use that .on() method.
 */
rl.on('line', input => {
    if(input.trim() == answer) {
        rl.close();
    } else {
        rl.setPrompt(`omg u so bad @ math...\nWhat is the sum of ${num1} + ${num2}?\n`);
        rl.prompt();
    }
});

rl.on('close', () => {
    console.log('ur maths r gud');
});