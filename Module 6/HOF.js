// A higher order function is a function which takes another function as an argument or returns a function 

let arr = [1, 2, 3, 4, 5]
let squaredArr = []

for(let i=0; i<arr.length; i++){
    squaredArr.push(arr[i]*arr[i])
}

console.log(squaredArr)

// map hof function
// Map will loop through every element of array and will perform specific operations that we provide
// Map method will always return a new array with results
const nums = [1, 2, 3, 4, 5]

const squaredNums = nums.map(function(n) {
    return n*n
})

console.log(squaredNums)

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]
const inrtoDollars = 80

let transactionsInDollars = transactions.map((amount) => {
    return (amount/inrtoDollars).toFixed(0)
})

console.log(transactionsInDollars)

// for each does not return anything. If we display transactionsInDollars1, we will get undefined
let transactionsInDollars1 = transactions.forEach((amount) => {
    return (amount/inrtoDollars).toFixed(0)
})