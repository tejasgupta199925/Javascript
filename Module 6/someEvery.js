// Some method 
// Condition check: To get true or false based on some condition
// It will return true even if 1 element satisfies the condition

const transactions = [-1000, -3000, -4000, -2000, -898, -3800, -4500]

let result = transactions.some(function(n) {
    return n>0
})

console.log(result)

// Every method
// It will return true if every element satisfies the condition otherwise returns false

let resultEvery = transactions.every(function(n) {
    return n<0
})

console.log(resultEvery)