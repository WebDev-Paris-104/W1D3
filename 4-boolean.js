/**
 * They are just true or false statements
 */

// True false table:

console.log(true && true)
console.log(true && false)
console.log(false && false)
console.log(true || true)
console.log(false || true)
console.log(false || false)

/**
 * And: &&
 * Or: ||
 * Greater: >
 * Lesser: <
 * GreaterOrEqual: >=
 * LesserOrEqual: <=
 * Loose Equality: ==
 * Strict Equality: ===
 */

// Loose equality

// Strict equality

// This is not a comparison
const catName = "Loop"
if (catName === "loop") {
	console.log("yay, the cat is named Loop")
}

// Truthyness
console.log("truthyness")
console.log(Boolean(5))
console.log(Boolean("hello"))
console.log(Boolean({}))
console.log(Boolean([]))
console.log(Boolean(true))

// Falsiness

console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean(false))

console.log(Number(true + true * 5).toFixed())
