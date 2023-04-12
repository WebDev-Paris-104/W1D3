let today = "wednesday"
let weekend = "saturday sunday"

if (weekend.includes(today)) {
	console.log("It is the weekend")
} else {
	console.log(`It is ${today}!`)
}

// Ternary operator
// condition ? true : false
const randomFloat = Math.random()

const weather = Math.random() > 0.9 ? "rain" : "sun"

console.log(weather)

const randomNumber = Math.floor(Math.random() * 10)

if (randomNumber >= 6) {
	console.log("The number is greater or equal to 6")
} else if (randomNumber === 5) {
	console.log("This number is 5")
} else {
	console.log("Our number is lesser than 5")
}

console.log(randomNumber)

const myReturnedValue = myFunction(Math.random())

function myFunction(float) {
	if (float > 0.9) {
		return "rain"
	} else {
		return "sun"
	}
}
