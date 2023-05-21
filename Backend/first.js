const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', (starter) => {
    console.log(`started at ${starter}`);
});
eventEmitter.emit('start', 23);