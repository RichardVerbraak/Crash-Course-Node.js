const EventEmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmitter {
	log(msg) {
		// When it receives 'message', emit (give) an id and the message
		this.emit('message', { id: uuid.v4(), msg: msg })
	}
}

module.exports = Logger
