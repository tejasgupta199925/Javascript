// Check if square of a number is even or not

// Imperative way of writing code
const a=4
let asquared = a*a
let isEven

if(asquared % 2 == 0){
    isEven = true
}
else{
    isEven = false
}

console.log(isEven)

// Declarative way of writing code
const checkForSquare = x => (x*x%2 === 0 ? true : false)
console.log(checkForSquare(5))