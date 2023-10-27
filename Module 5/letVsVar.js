var a=20
let b=20

var a=30
// let b=30                         // Redeclaring variables not allowed with let keywork
a=40                                // Allowed
b=40                                // Allowed

console.log(a)
console.log(b)

if(true){
    let c=40
    console.log(c)
}

// Variables declared with let keyword are block scoped
// console.log(c)                      // Allowed for variables declared with var keyword but not for variables declared with let keyword

// Reassigning values of variables declared with var and let is allowed
// const keyword behaves exactly like let (no redeclaration and block scope) but it doesn't allow reassigning values of it's variables

const d=10

// const d=20                          // Not allowed
// d=20                                // Not allowed

console.log(d)