const fs = require('fs');
const path = require('path');

if(fs.existsSync('new')) {
    if(fs.existsSync(path.join(__dirname, '/new', 'hello.txt'))) {
        console.log(`new dir & hello.txt already created...`);
    } else {
        fs.writeFile(path.join(__dirname, '/new', 'hello.txt'), 'hello world', err => {
            if(err) {
                throw err;
            }
        })
        console.log(`hello.txt created...`);
    }
} else {
    fs.mkdir(path.join(__dirname, '/new'), err => {
        if(err) {
            throw err;
        }
    });
    fs.writeFile(path.join(__dirname, '/new', 'hello.txt'), 'hello world', err => {
        if(err) {
            throw err;
        }
    })
    console.log(`new dir created...`);
    console.log(`hello.txt created...`);
}