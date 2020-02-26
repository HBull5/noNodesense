module.exports = {
    input(rl) {
        const promise = new Promise(resolve => {
            let input;
            rl.on('line', userInput => {
                input = userInput;
                resolve(input);
            });
        }) 
        return promise;
    }
}