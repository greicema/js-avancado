const eventEmitter = require('events');
const emitter = new eventEmitter();

emitter.on('User logged', data => {
    console.log(data);
});

emitter.emit('User logged', { user: 'Greice Mara' });