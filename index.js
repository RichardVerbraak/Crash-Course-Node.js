// Node.js doesn't feature ES6 syntax with imports/exports so you use require and module.exports (need Babel to compile it to ES6)
// You also have access to filename and directory name
// The Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {

// })

// console.log(__dirname, __filename)

// ## Require/Exports test

// const Person = require('./person')
// const person1 = new Person('Richard', 26)

// person1.greetings()

// ## Event Emitter ##

// const Logger = require('./logger')

// const logger = new Logger()

// logger.on('message', (data) => {
// 	console.log('Called the listener and received this data: ', data)
// })

// logger.log('Hello world')
// logger.log('Hi')
// logger.log('Bye')

const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
	// Will tell you the URL which is just /
	// localhost:5000/about will show /about
	console.log(req.url)

	// if (req.url === '/api/users') {
	// 	const users = [
	// 		{ name: 'Bob Smith', age: 40 },
	// 		{ name: 'John DOe', age: 30 },
	// 	]
	// 	res.writeHead(200, { 'Content-Type': 'application/json' })
	// 	res.end(JSON.stringify(users))
	// }

	// Reads the file and generates an error if there is one and gives you it's content
	// If there is no error, give status 200 with content type of text/html
	// Close off the responses with the content
	// if (req.url === '/') {
	// 	fs.readFile(
	// 		path.join(__dirname, 'public', 'index.html'),
	// 		(err, content) => {
	// 			if (err) throw err

	// 			res.writeHead(200, { 'Content-Type': 'text/html' })
	// 			res.end(content)
	// 		}
	// 	)
	// }

	// Build File path
	// If on the 'homepage' load index.html otherwise whatever is in the url like /about
	let filePath = path.join(
		__dirname,
		'public',
		req.url === '/' ? 'index.html' : req.url
	)

	// Extension of the file
	let extname = path.extname(filePath)

	// Default content type
	let contentType = 'text/html'

	// Check the extension and set the content type
	switch (extname) {
		case '.js':
			contentType = 'text/javascript'
			break
		case '.css':
			contentType = 'text/css'
			break
		case '.json':
			contentType = 'application/json'
			break
		case '.png':
			contentType = 'image/png'
			break
		case 'jpg':
			contentType = 'image/jpg'
			break
	}

	// Read file
	fs.readFile(filePath, (err, content) => {
		if (err) {
			if (err.code == 'ENOENT') {
				// Page not found
				fs.readFile(
					path.join(__dirname, 'public', '404.html'),
					(err, content) => {
						if (err) throw err
						res.writeHead(200, { 'Content-Type': 'text/html' })
						res.end(content, 'utf8')
					}
				)
			} else {
				// If it isnt a 404 so a server error of sorts
				res.writeHead(500)
				res.end(`Server Error: ${err.code}`)
			}
		} else {
			// Success
			res.writeHead(200, { 'Content-Type': contentType })
			res.end(content, 'utf8')
		}
	})
})

// It looks for a env port first and if that's not found the server will run on port 5000
const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
