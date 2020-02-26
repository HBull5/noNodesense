const fs = require('fs');
const path = require('path');
const rl = require('readline').createInterface(process.stdin, process.stdout);

rl.setPrompt(`Gimme a msg\n`);
rl.prompt();

rl.on('line', input => {
   fs.writeFile(path.join(__dirname, 'urMsg.txt'), input, (err) => {
       if(err) throw err;
   })
})

