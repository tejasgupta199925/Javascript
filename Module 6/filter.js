// Get all even elements of an array and add them in a new array

let numbers = [1, 2, 20, 35, 12, 17, 46]
let evenArray = []

for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2 === 0){
        evenArray.push(numbers[i])
    }
}

console.log(evenArray)

// Filter
// filter method returns a new array whose elements will only match a specific condition
// If the condition is true for an element it will return that element for that condition otherwise discards that element

let num = [1, 2, 20, 35, 12, 17, 46]

let evenNum = num.filter(function(n) {
    return n%2==0
})

console.log(evenNum)

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]
const deposits = transactions.filter(n => {
    return n>0
})

console.log(deposits)