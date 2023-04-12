/**
 * We want to be able to "write text"
 * (And a bit of coercion, casting/conversion, search)
 */

/**
 * single quotes: ''
 * double quotes: ""
 * backticks: ``
 */
const className = "Webdev 104"
const teachinTeam = "Florian, Ismet, Hugo"

//  Concatenation
console.log("hello " + className + " we are " + teachinTeam)

// Advantages of backticks
const multipleLineStrings = `

Hello there



`
console.log("multipleLineStrings", multipleLineStrings)

//  Template literal
console.log(`Hello ${className} we are ${19 + 3}`)

// Multi-line

// index in Strings

// console.log((className[5] = "Z"))
console.log(className)

/**
 * Some available methods
 * length, upper / lower case, includes, replace, replaceAll ...
 */
console.log(className.length)
console.log(className.toUpperCase())
console.log(teachinTeam.toLowerCase().includes("rian"))

const newTeacher = teachinTeam.replace("Florian", "Loop")

console.log(newTeacher)
/**
 * "Florian, Ismet, Hugo".toLowerCase()
 * "florian, ismet, hugo".includes("florian")
 */

// Immutability

// comparing strings
console.log("String comparison")
console.log("5" === 5)
console.log("5" == 5)

console.log("aul" < "Andra")
