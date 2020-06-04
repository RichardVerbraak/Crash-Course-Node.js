class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}

	greetings() {
		console.log(`I am ${this.name} and I am ${this.age}`)
	}
}

module.exports = Person
