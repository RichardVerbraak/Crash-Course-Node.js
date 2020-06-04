const eventEmitter = require('events')

// Create class
class MyEmitter extends eventEmitter {}

// Initialize Object
const myEmitter = new MyEmitter()

// Event listener
myEmitter.on('event', () => {
	console.log('Event fired!')
})

// Init event
myEmitter.emit('event')
