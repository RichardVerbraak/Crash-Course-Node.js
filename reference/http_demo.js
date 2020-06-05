const http = require('http')

// Create server object
// When the server receives a request, it will give a response back with hello world
http
	.createServer((req, res) => {
		// Write Response
		res.write('Hello world')
		res.end()
	})
	.listen(5000, () => {
		console.log('Server running...')
	})
