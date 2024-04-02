const EventEmitter = require('events');
const myEmitter = new EventEmitter();
//Listener 1 for 'eventA'

myEmitter.on('eventA',()=>{
    console.log('Listener 1 for event executed');
});

//Listener 2 for 'eventA'
myEmitter.on('eventA',()=>{
    console.log('Listener 2 for event executed');
});
//Emitting 'eventA'
myEmitter.emit('eventA');