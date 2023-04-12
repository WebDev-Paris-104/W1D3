/**
 * Welcome to JavaScript!
 */

/**
 * ? Primitive types:
 * numbers
 * string
 * boolean
 * null
 * undefined
 * out of the course :
 *  - BigInt
 *  - Symbol
 *
 * Non primitive type:
 * object
 * array
 * function
 *  */

// What is a variable
// Assigning a value to a variable
let myAge = 33
// const vs let
const myName = "Florian"
let somethingElse
const anotherVariable = "Webdev 104",
	classSize = 19

console.log(myAge, myName, somethingElse)

// Reassigning a value
somethingElse = "Mac is okay"

console.log(myAge, myName, somethingElse)

// myName = "No"

// Assigning an other type

somethingElse = 50

// Rules for naming variables

// snake_case
let python_variable

// PascalCase
let JavaVariable

// camelCase (JS)
let javaScriptVariable

// typeof variables

console.log("typeof my class size: ", typeof classSize)
console.log("typeof my name: ", typeof myName)
console.log("typeof object: ", typeof {})
console.log("typeof array: ", typeof [])
console.log("typeof function: ", typeof aFunction)

function aFunction() {}
// JS file is read from top to bottom

const isItBreakTime = true
console.log(isItBreakTime)
