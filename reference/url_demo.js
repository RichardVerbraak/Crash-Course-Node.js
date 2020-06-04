const url = require('url')

const myUrl = new URL('htttp://mywebsite.com/hello.html?id=100&status=active')

// Serialized URL
console.log(myUrl.href)
console.log(myUrl.toString())

// Host (Root domain)
// This one also shows you the port if it had one like mywebsite.com:8000
console.log(myUrl.host)

// Hostname
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname)

// Serialized Query param
console.log(myUrl.search)

// Search params made into Object
console.log(myUrl.searchParams)

// Add param
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)

// Loop through params
myUrl.searchParams.forEach((value, name) => {
	console.log(`${name}: ${value}`)
})
