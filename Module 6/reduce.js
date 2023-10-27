// Find sum of every element in an array

let num = [1, 2, 3, 4, 10]
let sum = 0

for(let i=0; i<num.length; i++){
    sum += num[i]
}

console.log(sum)

// Reduce
// reduce method will always return a single element (not an array)

let result = num.reduce(function(acc, value) {
    let updatedSum = acc + value
    return updatedSum
}, 0)                       
// Initial value (for sum as 0, similarly taken as 1 for multiplication). The returned updatedSum is returned here.
// 0 initially --> 1 after 1st iteration --> 3 after 2nd iteration and so on. So for ith iteration acc takes updatedSum of (i-1)th iteration
// The reduce method will return the last accumulated value

console.log(result)

let product = num.reduce(function(acc, value) {
    return acc*value;
}, 1)

console.log(product)