const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Define functions for event listeners
function listener1() {
  console.log('Listener 1 for event executed');
}

function listener2() {
  console.log('Listener 2 for event executed');
}

// Register event listeners
myEmitter.on('eventA', listener1);
myEmitter.on('eventA', listener2);

// Emit the event
myEmitter.emit('eventA');
