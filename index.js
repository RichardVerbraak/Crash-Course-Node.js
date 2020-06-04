// Node.js doesn't feature ES6 syntax with imports/exports so you use require and module.exports (need Babel to compile it to ES6)
// You also have access to filename and directory name
// The Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {

// })

// console.log(__dirname, __filename)

// const Person = require('./person')
// const person1 = new Person('Richard', 26)

// person1.greetings()

const Logger = require('./logger')

const logger = new Logger()

logger.on('message', (data) => {
	console.log('Called the listener and received this data: ', data)
})

logger.log('Hello world')
logger.log('Hi')
logger.log('Bye')
