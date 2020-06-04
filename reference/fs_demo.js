const fs = require('fs')
const path = require('path')

// Create folder (by default asynchronous but there is a synchronous version)
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
// 	if (err) throw err
// 	console.log('Folder created...')
// })

// Create and write to file (Overwrites)
// Then in the callback, console.log and then append another line to the txt file
// fs.writeFile(
// 	path.join(__dirname, '/test', 'hello.txt'),
// 	'Hello World',
// 	(err) => {
// 		if (err) throw err
// 		console.log('File written to...')

// 		// File append
// 		fs.appendFile(
// 			path.join(__dirname, '/test', 'hello.txt'),
// 			' I love Node.js',
// 			(err) => {
// 				if (err) throw err
// 				console.log('File appended to...')
// 			}
// 		)
// 	}
// )

// Read the file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
	if (err) throw err
	console.log(data)
})

// Rename file
fs.rename(
	path.join(__dirname, '/test', 'hello.txt'),
	path.join(__dirname, '/test', 'helloworld.txt'),
	(err) => {
		if (err) throw err
		console.log('File renamed...')
	}
)
