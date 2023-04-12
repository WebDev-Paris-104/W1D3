/**
 * Let's talk about Math
 */

/**
 * Operators:
 * addition: +
 * substraction: -
 * multiply: *
 * division: /
 * powerof: **
 * modulo: %
 */

console.log("is even :", 3 % 2 === 0)
console.log("is even :", 6 % 2 === 0)

console.log(739 % 60)
console.log(739 / 60)

// Order of operations
console.log(2 + 3 * 5)
console.log((5 + 5) * 2)
/**
 * 5+5
 * 10 * 2
 * console.log
 */

let myAge = 33
myAge = myAge + 1

/**
 * Shorthand math
 */

myAge += 1
console.log(myAge)
myAge--
console.log(myAge)

myAge -= 3

myAge = myAge - 3

myAge *= 10
console.log("myAge", myAge)

const weirdFloat = 0.1 + 0.2
console.log(weirdFloat.toFixed(1))
console.log((0.1 + 0.2).toFixed(2))
console.log(1 / 3)

const fixedFloat = weirdFloat.toFixed(1)

const result = 1 + Number(fixedFloat)
/**
 * 1 * '0.3'
 * 0.3
 * 0.3 + 1
 */
console.log(result)

const toheebAge = "34"
console.log(Number(toheebAge))
// Math constructor

const randomFloat = Math.random()
console.log(randomFloat)
const floatBetween0And20 = randomFloat * 20
console.log("floatBetween0And20", floatBetween0And20)
const finalNumber = Math.floor(floatBetween0And20)
console.log("finalNumber", finalNumber)

console.log(Math.floor(Math.random() * 10))
// Getting a random number

// Operations between numbers and Strings

// NaN

console.log(typeof NaN)

console.log(typeof (3 * "hello") === "number")

// Incrementing / Decrementing numbers
