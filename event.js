const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
    console.log(`the event 'event' happened`);
});

myEmitter.on('barf', () => {
    console.log(`the event 'barf' happened`);
});

if(true) {
    myEmitter.emit('event');
}

if(false) {
    myEmitter.emit('barf');
}