// The good old for-loop

// for (variable initialisation ; condition ; increment / decrement) {}
for (let i = 0; i < 10; i = i + 1) {
	console.log(i)
}

// for (let i = 0; i >= 0; i++) {
// 	console.log(i)
// }

let index = 0
while (index < 10) {
	console.log("doing something")
	index++
}

// Anatomy of a for-loop

const firstName = "Mohammad"
// *M*o*h*a*m*m*a*d*
let starifiedName = "*"
for (let i = 0; i < firstName.length; i++) {
	// '*'        =      *          M     *
	//  *M               *M*
	// *M*    o*
	// starifiedName = starifiedName + firstName[i] + "*"
	starifiedName += firstName[i] + "*"
	// starifiedName += `${firstName[i]}*`
}
console.log(starifiedName)
