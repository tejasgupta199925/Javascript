let arr = [
    {name: 'A', age: 14, gender: 'M'},
    {name: 'B', age: 34, gender: 'M'},
    {name: 'C', age: 24, gender: 'F'},
    {name: 'D', age: 44, gender: 'F'},
    {name: 'E', age: 44, gender: 'M'},
    {name: 'F', age: 28, gender: 'F'},
    {name: 'G', age: 36, gender: 'M'},
    {name: 'H', age: 47, gender: 'F'},
]

// Age of all males
let males = arr.filter(obj => {
    return obj.gender == 'M'
})

let maleAge = males.map(obj => obj.age)

let maleAge1 = arr.filter(obj => {                      // Chaining the methods
    return obj.gender == 'M'
}).map(obj => obj.age)

console.log(males)
console.log(maleAge)
console.log(maleAge1)


// From the transactions array, find the sum of all deposits
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]

let sumDeposits = transactions.filter(amount => {
    return amount>0
}).reduce((acc, amount) => {
    return acc+amount
}, 0)

console.log(sumDeposits)